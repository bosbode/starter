class Animations {
	constructor(){
		this.contentTitle = document.querySelectorAll('.content__bodytext > h1');
		this.bubbles = document.querySelector('.content__animation-container--bubbles');
		this.fireContainer = document.querySelector('.content__animation-container--fire');
		this.tentaclesContainer = document.querySelectorAll('.content__animation-container--tentacles');
		this.smokeContainer = document.querySelectorAll('.content__animation-container--smoke');
		this.birdContainer = document.querySelectorAll('.content__animation-container--bird');
		this.tentacles = document.querySelector('#tentacle-group');
		this.fire = document.querySelector('#fire-group');
		this.smoke = document.querySelector('#smoke-group');
		this.birdTree = document.querySelector('#tree-top');
		this.icon = document.querySelectorAll('.site-header__icon');
		this.treeShade = document.querySelectorAll('.tree-shade');
		this.tree = document.querySelectorAll('.tree');
		this.fish = document.querySelector('#fish-group');
		this.sun = document.querySelector('#sun');
		this.night = document.querySelector('#night');
		this.contentClass = document.querySelectorAll('.content');
		this.siteHeader = document.querySelectorAll('.site-header');

		this.clicked = false;
		
		this.events();
	}

	events() {
		this.bubbles.addEventListener('click', this.animateFish.bind(this));
		this.sun.addEventListener('click', this.nightMode.bind(this));
		this.fireContainer.addEventListener('click', this.animateSmoke.bind(this));
		this.birdTree.addEventListener('click', this.flyBird.bind(this));
		this.addOrRemoveClass(this.birdTree, 'content__animation-bird-tree', 'add');
	}

	animateFish() {
		const that = this;

		// Hide bubbles
		this.addOrRemoveClass(this.bubbles, 'content--hide', 'add');

		// Undo hide bubbles after 2400 milliseconds
		setTimeout(function() {
			that.addOrRemoveClass(that.bubbles, 'content--hide', 'remove');
		}, 1400);

		// Play fish animation
		this.addOrRemoveClass(this.fish, 'fish-group--play-animation', 'add');
		
		// Remove fish animation so it can play again
		setTimeout(function() {
			that.addOrRemoveClass(that.fish, 'fish-group--play-animation', 'remove');
		}, 1200);
	}

	animateSmoke() {
		// If fire is visable, hide fire and show smoke
		// Else show fire and stop smoke animation
		if(!this.fire.classList.contains('fire-group--hidden')){
			this.addOrRemoveClass(this.fire, 'fire-group--hidden', 'add');
			this.addOrRemoveClass(this.smoke, 'smoke-group--play-animation', 'add');
		} else {
			this.addOrRemoveClass(this.fire, 'fire-group--hidden', 'remove');
			this.addOrRemoveClass(this.smoke, 'smoke-group--play-animation', 'remove');
		}
	}
	
	flyBird() {
		const that = this;

		if (!this.clicked) {
			// Show bird container and append animation, remove tree shake animation
			this.addOrRemoveClass(this.birdContainer, 'content--show', 'add');
			this.addOrRemoveClass(this.birdContainer, 'content__animation-container--bird-animate', 'add');
			this.addOrRemoveClass(this.birdTree, 'content__animation-bird-tree', 'remove');
	
			// Hide bird container after 2200 milliseconds
			setTimeout(function() {
				that.addOrRemoveClass(that.birdContainer, 'content--show', 'remove');
			}, 2200);

			this.clicked = true;
		}
	}

	nightMode() {
		const that = this;

		// Shows and appends tentacle animation
		this.addOrRemoveClass(this.tentacles, 'tentacles-group--play-animation', 'add');
		
		// Hide bubbles and sun
		this.addOrRemoveClass([this.bubbles, this.sun], 'content--hide', 'add');
		
		// Show moon, stars and tentacles
		this.addOrRemoveClass([this.tentaclesContainer, this.night], 'content--show', 'add');
		
		// Swap tree colors so the shade is on the correct side
		this.addOrRemoveClass(this.treeShade, 'tree-shade--white', 'add');
		this.addOrRemoveClass(this.tree, 'tree--blue', 'add');

		// Inverts the colors so it looks like that these items are unaffected by the night swap
		this.addOrRemoveClass([this.contentClass, this.contentTitle, this.siteHeader, this.fireContainer, this.icon], 'content--invert', 'add');

		// Undo all above changes after 2500 milliseconds
		setTimeout(function() {
			that.addOrRemoveClass(that.tentacles, 'tentacles-group--play-animation', 'remove');
			
			that.addOrRemoveClass([that.bubbles, that.sun], 'content--hide', 'remove');
			
			that.addOrRemoveClass([that.tentaclesContainer, that.night], 'content--show', 'remove');
			
			that.addOrRemoveClass(that.treeShade, 'tree-shade--white', 'remove');
			that.addOrRemoveClass(that.tree, 'tree--blue', 'remove');

			that.addOrRemoveClass([that.contentClass, that.contentTitle, that.siteHeader, that.fireContainer, that.icon], 'content--invert', 'remove');
		}, 2500);
	}

	addOrRemoveClass(selector, className, specifier) {
		// Check if selector is an array
		if(Array.isArray(selector)) {
			// Loop through array
			selector.forEach(function(item) {
				// Check if each item in array is a nodelist
				if(NodeList.prototype.isPrototypeOf(item)) {
					// Check if specifier is add or remove
					if(specifier === 'add') {
						// Loop through nodelist and add or remove classname
						item.forEach(function(element) {
							element.classList.add(className);
						})
					} else {
						item.forEach(function(element) {
							element.classList.remove(className);
						})
					}
				// If selector is not a nodelist, add or remove classname directly to selector	
				} else {
					if(specifier === 'add') {
						item.classList.add(className);
					} else {
						item.classList.remove(className);
					}
				}
			})
		// If selector is not an array, check if it's a nodelist
		} else if(NodeList.prototype.isPrototypeOf(selector)){
			// Check if specifier is add or remove
			if(specifier === 'add') {
				// Loop through nodelist and add or remove classname
				selector.forEach(function(element) {
					element.classList.add(className);
				})
			} else {
				selector.forEach(function(element) {
					element.classList.remove(className);
				})
			}
		// If selector is not a nodelist, add or remove classname directly to selector	
		} else {
			if(specifier === 'add') {
				selector.classList.add(className);
			} else {
				selector.classList.remove(className);
			}
		}
	}
}

export default Animations;
