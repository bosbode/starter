import $ from 'jquery';

class Animations {
	constructor(){
		this.contentTitle = $('.content__bodytext > h1');
		this.bubbles = $('.content__animation-container--bubbles');
		this.fireContainer = $('.content__animation-container--fire');
		this.tentaclesContainer = $('.content__animation-container--tentacles');
		this.smokeContainer = $('.content__animation-container--smoke');
		this.birdContainer = $('.content__animation-container--bird');
		this.tentacles = $('#tentacle-group');
		this.fire = $('#fire-group');
		this.smoke = $('#smoke-group');
		this.birdTree = $('#tree-top');
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
		this.birdTree.on('click', this.flyBird.bind(this));
		this.birdTree.addClass('content__animation-bird-tree');
	}

	animateFish() {
		const that = this;

		this.bubbles.addClass('content--hide');

		setTimeout(function() {
			that.bubbles.removeClass('content--hide');
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
	
	flyBird() {
		const that = this;

		this.birdContainer.addClass('content__animation-container--bird-animate');
		this.birdContainer.addClass('content--show');
		this.birdTree.removeClass('content__animation-bird-tree');

		setTimeout(function() {
			that.birdContainer.removeClass('content--show');
		}, 2200);
	}

	nightMode() {
		const that = this;

		this.tentaclesContainer.addClass('content--show');
		this.tentacles.addClass('tentacles-group--play-animation');

		this.bubbles.addClass('content--hide');

		this.sun.addClass('content--hide');
		this.night.addClass('content--show');
		
		this.treeShade.addClass('tree-shade--white');
		this.tree.addClass('tree--blue');

		this.$content.addClass('content--invert');
		this.contentTitle.addClass('content--invert');
		this.siteHeader.addClass('content--invert');
		this.fireContainer.addClass('content--invert');
		this.icon.addClass('content--invert');

		setTimeout(function() {
			that.tentaclesContainer.removeClass('content--show');
			that.tentacles.removeClass('tentacles-group--play-animation');

			that.bubbles.removeClass('content--hide');

			that.sun.removeClass('content--hide');
			that.night.removeClass('content--show');

			that.treeShade.removeClass('tree-shade--white');
			that.tree.removeClass('tree--blue');

			that.$content.removeClass('content--invert');
			that.contentTitle.removeClass('content--invert');
			that.siteHeader.removeClass('content--invert');
			that.fireContainer.removeClass('content--invert');
			that.icon.removeClass('content--invert');
		}, 2500);
	}
}

export default Animations;
