import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll"
import waypoints from "../../../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.headerTriggerElement = $(".large-hero__logo");
		this.createHeaderWaypoint();
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.circleButton = $(".btn--circle");
		this.createPageSectionWaypoint();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on("load", function(){
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {

		this.headerLinks.smoothScroll({
			speed: 425
		});

		this.circleButton.smoothScroll({
			speed: 425
		});
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if(direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoint() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
						that.menuContent.removeClass("site-header__menu-content--is-visable");
						that.siteHeader.removeClass("site-header--is-expanded");
						that.menuIcon.removeClass("site-header__menu-icon--close-x");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
						that.menuContent.removeClass("site-header__menu-content--is-visable");
						that.siteHeader.removeClass("site-header--is-expanded");
						that.menuIcon.removeClass("site-header__menu-icon--close-x");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;