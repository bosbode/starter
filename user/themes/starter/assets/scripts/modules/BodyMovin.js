import $ from "jquery";
import lottie from "lottie-web";

class BodyMovin {
	constructor(){
		this.bodyMovin = document.getElementById('animation__logo');
		this.startAnimation();
	}

	startAnimation() {
		
		lottie.loadAnimation({
			container: this.bodyMovin,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			name: 'logo',
			path: '/user/animations/logo_wink.json'
		  });
	}
}

export default BodyMovin;
