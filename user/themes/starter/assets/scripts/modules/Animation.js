import $ from 'jquery';

class Animations {
	constructor(){
		this.bubbles = $('.content__animation-container--bubbles');
		this.fireContainer = $('.content__animation-container--fire');
		this.tentaclesContainer = $('.content__animation-container--tentacles');
		this.smokeContainer = $('.content__animation-container--smoke');
		this.tentacles = $('#tentacle-group');
		this.fire = $('#fire-group');
		this.smoke = $('#smoke-group');
		this.icon = $('.site-header__icon');
		this.treeShade = $('.tree-shade');
		this.tree = $('.tree');
		this.fish = $('#fish-group');
		this.sun = $('#sun');
		this.night = $('#night');
		this.$content = $('.content');
		this.siteHeader = $('.site-header');
		this.events();
	}

	events() {
		this.bubbles.on('click', this.animateFish.bind(this));
		this.sun.on('click', this.nightMode.bind(this));
		this.fireContainer.on('click', this.animateSmoke.bind(this));
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

	animateSmoke() {

		if(!this.fire.hasClass('fire-group--hidden')){
			this.fire.addClass('fire-group--hidden');
			this.smoke.addClass('smoke-group--play-animation');
		} else {
			this.fire.removeClass('fire-group--hidden');
			this.smoke.removeClass('smoke-group--play-animation');
		}
	}

	nightMode() {
		var that = this;

		this.tentaclesContainer.addClass('content--show');
		this.tentacles.addClass('tentacles-group--play-animation');

		this.bubbles.addClass('content--hide');

		this.sun.addClass('content--hide');
		this.night.addClass('content--show');
		
		this.treeShade.css('fill', '#fff');
		this.tree.css('fill', '#dde2ff');

		this.$content.addClass('content--invert');
		this.siteHeader.addClass('content--invert');
		this.fireContainer.addClass('content--invert');
		this.icon.addClass('content--invert');

		setTimeout(function() {
			that.tentaclesContainer.removeClass('content--show');
			that.tentacles.removeClass('tentacles-group--play-animation');

			that.bubbles.removeClass('content--hide');

			that.sun.removeClass('content--hide');
			that.night.removeClass('content--show');

			that.treeShade.css('fill', '#dde2ff');
			that.tree.css('fill', '#fff');

			that.$content.removeClass('content--invert');
			that.siteHeader.removeClass('content--invert');
			that.fireContainer.removeClass('content--invert');
			that.icon.removeClass('content--invert');
		}, 2500);
	}
}

export default Animations;
