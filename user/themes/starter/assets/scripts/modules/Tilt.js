import tilt from 'vanilla-tilt';

class Tilt {
	constructor(){
		this.animationContainer = document.querySelector('.content__animation-container');
		this.initialize();
	}

	initialize() {
		tilt.init(this.animationContainer), {
			speed: 800
		}
	}
}

export default Tilt;
