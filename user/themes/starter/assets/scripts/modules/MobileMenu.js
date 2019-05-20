class MobileMenu {
	constructor(){
		this.siteHeader = $(".site-header");
		this.siteHeaderLogo = $(".site-header__logo");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.siteHeaderLogo.click(this.scrollToTop.bind(this));
	}

	scrollToTop() {
		window.scrollTo(0, 0);
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visable");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;