import $ from 'jquery';

class Animations {
	constructor(){
		this.bubbles = $('.content__animation-container--bubbles');
		this.fire = $('.content__animation-container--fire');
		this.tentaclesContainer = $('.content__animation-container--tentacles');
		this.tentacles = $('#tentacle-group');
		this.icon = $('.site-header__icon');
		this.treeShade = $('.tree-shade');
		this.tree = $('.tree');
		this.fish = $('#fish-group');
		this.sun = $('#sun');
		this.night = $('#night');
		this.$body = $('body');
		this.events();
	}

	events() {
		this.bubbles.on('click', this.animateFish.bind(this));
		this.sun.on('click', this.nightMode.bind(this));
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

	nightMode() {
		var that = this;

		this.tentaclesContainer.css('display', 'block');
		this.tentacles.addClass('tentacles-group--play-animation');

		this.bubbles.css('display', 'none');

		this.sun.css('display', 'none');
		this.night.css('display', 'block');
		this.$body.css('filter', 'invert(100%)');
		this.fire.css('filter', 'invert(100%)');
		this.icon.css('filter', 'invert(100%)');
		this.treeShade.css('fill', '#fff');
		this.tree.css('fill', '#dde2ff');

		setTimeout(function() {
			that.tentaclesContainer.css('display', 'none');
			that.tentacles.removeClass('tentacles-group--play-animation');

			that.bubbles.css('display', 'block');

			that.treeShade.css('fill', '#dde2ff');
			that.tree.css('fill', '#fff');
			that.$body.css('filter', 'invert(0)');
			that.fire.css('filter', 'invert(0)');
			that.icon.css('filter', 'invert(0)');
			that.sun.css('display', 'block');
			that.night.css('display', 'none');
		}, 2500);
	}
}

export default Animations;
