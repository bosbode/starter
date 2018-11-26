import $ from "jquery";

class ObjectFit {
	constructor(){
		this.imageContainer = $(".carousel");
		this.ieFallback();
	}

	ieFallback() {
		var that = this;
		if ( ! Modernizr.objectfit ) {
		  that.imageContainer.each(function() {
		    var container = this,
		        imgUrl = $(container).find("img").prop("src");
		    if (imgUrl) {
		    	console.log(imgUrl);
		      $(container)
		        .css('backgroundImage', 'url(' + imgUrl + ')')
		        .addClass('compat-object-fit');
		    }
		  });
		}
	}
}

export default ObjectFit;