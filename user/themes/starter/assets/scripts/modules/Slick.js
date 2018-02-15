import $ from "jquery";
import slick from "slick-carousel/slick/slick.min.js";

class MobileMenu {
	constructor(){
		this.carousel = $(".carousel");
		this.initalise();
	}

	initalise() {
		
		this.carousel.slick({
			// nextArrow: '<i class="fas fa-camera-retro"></i>',
			// prevArrow: '<i class="fas fa-camera-retro"></i>',
			lazyLoad: 'ondemand',
			infinite: true,
			dots: true,
			mobileFirst: true,
			arrows: false,
			speed: 500,
			cssEase: 'linear',
			adaptiveHeight: true,

			responsive: [{

				breakpoint: 900,
				settings: {
				  arrows: true
				}
		  
			  }]
		})
	}
}

export default MobileMenu;