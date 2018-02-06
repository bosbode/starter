import $ from "jquery";
import waypoints from "../../../../../../node_modules/waypoints/lib/noframework.waypoints";

class Parallax {
	constructor(){
		this.parallaxContainer = $(".parallax__container");
		this.parallaxImage = $(".parallax__image");
		// this.activateImage();
		// this.ieFallback();
		this.appendImageToBackground();
	}

	appendImageToBackground() {

		for(var i = 0; i < this.parallaxImage.length; i++){

			this.parallaxContainer[i].style.backgroundImage = 'url(' + this.parallaxImage[i].getAttribute('src') + ')';
			this.parallaxContainer[i].style.backgroundRepeat = 'no-repeat';
			this.parallaxContainer[i].style.backgroundAttachment = 'fixed';
			this.parallaxContainer[i].style.backgroundPosition = 'center';
			this.parallaxContainer[i].style.backgroundSize = 'cover';

		};
	}

	// activateImage() {
	// 	var that = this;
	// 	this.parallaxContainer.each(function(){
	// 		var currentItem = this;
	// 		new Waypoint({
	// 			element: currentItem,
	// 			handler: function(direction) {
	// 				if(direction == "down"){
	// 					$(currentItem).toggleClass("parallax__container--active");
	// 				} else {
	// 					$(currentItem).toggleClass("parallax__container--active");
	// 				}
	// 			},
	// 			offset: "100%"
	// 		});
	// 	});
	// }

	// ieFallback() {
	// 	var that = this;
	// 	if ( ! Modernizr.objectfit ) {
	// 	  that.parallaxContainer.each(function() {
	// 	    var container = this,
	// 	        imgUrl = $(container).find("img").prop("src");
	// 	    if (imgUrl) {
	// 	    	console.log(imgUrl);
	// 	      $(container)
	// 	        .css('backgroundImage', 'url(' + imgUrl + ')')
	// 	        .addClass('compat-object-fit');
	// 	    }
	// 	  });
	// 	}
	// }
}

export default Parallax;