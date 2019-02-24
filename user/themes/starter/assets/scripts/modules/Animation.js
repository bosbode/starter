class Animations {
	constructor(){
		this.contentTitle = document.querySelector('.content__bodytext > h1');
		this.bubbles = document.querySelector('.content__animation-container--bubbles');
		this.fireContainer = document.querySelector('.content__animation-container--fire');
		this.tentaclesContainer = document.querySelector('.content__animation-container--tentacles');
		this.smokeContainer = document.querySelector('.content__animation-container--smoke');
		this.birdContainer = document.querySelector('.content__animation-container--bird');
		this.tentacles = document.querySelector('#tentacle-group');
		this.fire = document.querySelector('#fire-group');
		this.smoke = document.querySelector('#smoke-group');
		this.birdTree = document.querySelector('#tree-top');
		this.icon = document.querySelector('.site-header__icon');
		this.treeShade = document.querySelector('.tree-shade');
		this.tree = document.querySelector('.tree');
		this.fish = document.querySelector('#fish-group');
		this.sun = document.querySelector('#sun');
		this.night = document.querySelector('#night');
		this.contentClass = document.querySelector('.content');
		this.siteHeader = document.querySelector('.site-header');

		this.clicked = false;
		
		this.events();
	}

	events() {
		this.bubbles.addEventListener('click', this.animateFish.bind(this));
		this.sun.addEventListener('click', this.nightMode.bind(this));
		this.fireContainer.addEventListener('click', this.animateSmoke.bind(this));
		this.birdTree.addEventListener('click', this.flyBird.bind(this));
		this.birdTree.classList.add('content__animation-bird-tree');
	}

	animateFish() {
		const that = this;

		// Hide bubbles
		this.bubbles.classList.add('content--hide');

		// Undo hide bubbles after 2400 milliseconds
		setTimeout(function() {
			that.bubbles.classList.remove('content--hide');
		}, 1400);

		// Play fish animation
		this.fish.classList.add('fish-group--play-animation');
		
		// Remove fish animation so it can play again
		setTimeout(function() {
			that.fish.classList.remove('fish-group--play-animation');
		}, 1200);
	}

	animateSmoke() {
		// If fire is visable, hide fire and show smoke
		// Else show fire and stop smoke animation
		if(!this.fire.classList.contains('fire-group--hidden')){
			this.fire.classList.add('fire-group--hidden');
			this.smoke.classList.add('smoke-group--play-animation');
		} else {
			this.fire.classList.remove('fire-group--hidden');
			this.smoke.classList.remove('smoke-group--play-animation');
		}
	}
	
	flyBird() {
		const that = this;

		if (!this.clicked) {
			// Show bird container and append animation, remove tree shake animation
			this.birdContainer.classList.add('content--show');
			this.birdContainer.classList.add('content__animation-container--bird-animate');
			this.birdTree.classList.remove('content__animation-bird-tree');
	
			// Hide bird container after 2200 milliseconds
			setTimeout(function() {
				that.birdContainer.classList.remove('content--show');
			}, 2200);

			that.clicked = true;
		}
	}

	nightMode() {
		const that = this;

		// Shows and appends tentacle animation
		this.tentaclesContainer.classList.add('content--show');
		this.tentacles.classList.add('tentacles-group--play-animation');

		// Hide bubbles
		this.bubbles.classList.add('content--hide');

		// Hide sun, show moon and stars
		this.sun.classList.add('content--hide');
		this.night.classList.add('content--show');
		
		// Swap tree colors so the shade is on the correct side
		this.treeShade.classList.add('tree-shade--white');
		this.tree.classList.add('tree--blue');

		// Inverts the colors so it looks like that these items are unaffected by the night swap
		this.contentClass.classList.add('content--invert');
		this.contentTitle.classList.add('content--invert');
		this.siteHeader.classList.add('content--invert');
		this.fireContainer.classList.add('content--invert');
		this.icon.classList.add('content--invert');

		// Undo all above changes after 2500 milliseconds
		setTimeout(function() {
			that.tentaclesContainer.classList.remove('content--show');
			that.tentacles.classList.remove('tentacles-group--play-animation');

			that.bubbles.classList.remove('content--hide');

			that.sun.classList.remove('content--hide');
			that.night.classList.remove('content--show');

			that.treeShade.classList.remove('tree-shade--white');
			that.tree.classList.remove('tree--blue');

			that.contentClass.classList.remove('content--invert');
			that.contentTitle.classList.remove('content--invert');
			that.siteHeader.classList.remove('content--invert');
			that.fireContainer.classList.remove('content--invert');
			that.icon.classList.remove('content--invert');
		}, 2500);
	}
}

export default Animations;
