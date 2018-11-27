import $ from "jquery";
import slick from "slick-carousel/slick/slick.min.js";

class Slick {
	constructor(){
		this.carousel = $(".slick-carousel");
		this.initalise();
	}

	initalise() {
		
		this.carousel.slick({
			lazyLoad: 'ondemand',
			infinite: true,
			dots: true,
			mobileFirst: true,
			arrows: false,
			speed: 500,
			cssEase: 'linear',

			responsive: [{

				breakpoint: 900,
				settings: {
				  arrows: true
				}
		  
			  }]
		})
	}
}

export default Slick;
