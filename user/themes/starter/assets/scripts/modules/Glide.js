import glide from '@glidejs/glide';

class Glide {
	constructor(){
		this.slider = document.querySelector('.glide');
		this.initialize();
	}

	initialize() {
		if(this.slider) {
			new glide(this.slider, {
				type: 'carousel',
				gap: 0,
				autoplay: 5000
			}).mount();
		}
	}
}

export default Glide;
