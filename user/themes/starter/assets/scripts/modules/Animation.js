import $ from 'jquery';

class Animations {
	constructor(){
		this.bubbles = $('.content__animation-container--bubbles');
		this.fish = $('#fish-group');
		this.events();
	}

	events() {
		this.bubbles.on('click', this.animateFish.bind(this));
	}

	animateFish() {
		var that = this;

		this.bubbles.css('opacity', 0);

		setTimeout(function() {
			that.bubbles.css('opacity', 1);
		}, 2400);

		this.fish.addClass('fish-group--play-animation');
		
		setTimeout(function() {
			that.fish.removeClass('fish-group--play-animation');
		}, 1200);
	}
}

export default Animations;
