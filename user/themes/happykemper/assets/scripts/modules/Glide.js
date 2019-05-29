import glide from '@glidejs/glide';

class Glide {
	constructor(){
		this.slider = document.querySelector('.glide');
		this.setAutoplay();
		this.initialize();
	}

	setAutoplay() {
		if(this.slider && this.slider.dataset.autoplay) {			
			this.autoplay = this.slider.dataset.autoplay;
		} else {
			this.autoplay = 5000;
		}
	}

	initialize() {
		if(this.slider) {
			new glide(this.slider, {
				type: 'carousel',
				gap: 0,
				autoplay: this.autoplay
			}).mount();
		}
	}
}

export default Glide;
