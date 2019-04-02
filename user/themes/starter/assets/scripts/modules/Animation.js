class Animations {
	constructor(){
		this.contentTitle = document.querySelectorAll('.content__bodytext > h1');
		this.bubbles = document.querySelector('.animation__bubbles');
		this.fireContainer = document.querySelector('.animation__fire');
		this.tentaclesContainer = document.querySelectorAll('.animation__tentacles');
		this.smokeContainer = document.querySelectorAll('.animation__smoke');
		this.birdContainer = document.querySelectorAll('.animation__bird');
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
		this.popup = document.querySelectorAll('.pop-up');
		this.popupGroup = document.querySelector('#pop-up-group');
		this.popupLove = document.querySelector('#pop-up-love');
		this.valuePlayButton = document.querySelectorAll('.btn__play--values');
		this.popupItem = document.querySelectorAll('.pop-up-item');
		this.valueTwoHearts = document.querySelectorAll('.animation__value-02-hearts');
		this.valueTwoWindow = document.querySelectorAll('.animation__value-02-window');
		this.valueTwoWebsite = document.querySelectorAll('.animation__value-02-website');
		this.valueTwoCmsText = document.querySelectorAll('.animation__value-02-cms-text');
		this.valueTwoCmsImage = document.querySelectorAll('.animation__value-02-cms-image');
		this.valueTwoCmsButton = document.querySelector('.animation__value-02-cms-btn');

		this.threeClicked = false;
		this.eventTriggerd = false;

		this.addOrRemoveClass(this.birdTree, 'animation__tree', 'add');
		
		this.events();
	}

	events() {
		this.bubbles.addEventListener('click', this.animateFish.bind(this));
		this.sun.addEventListener('click', this.nightMode.bind(this));
		this.fireContainer.addEventListener('click', this.animateSmoke.bind(this));
		this.birdTree.addEventListener('click', this.flyBird.bind(this));
		this.valuePlayButton[0].addEventListener('click', this.valueOne.bind(this));		
		this.valuePlayButton[1].addEventListener('click', this.valueTwo.bind(this));		
	}

	animateFish() {
		const that = this;

		// Hide bubbles
		this.addOrRemoveClass(this.bubbles, 'animation--hide', 'add');

		// Undo hide bubbles after 2400 milliseconds
		setTimeout(function() {
			that.addOrRemoveClass(that.bubbles, 'animation--hide', 'remove');
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

		if (!this.threeClicked) {
			// Show bird container and append animation, remove tree shake animation
			this.addOrRemoveClass(this.birdContainer, 'animation--show', 'add');
			this.addOrRemoveClass(this.birdContainer, 'animation__bird-animate', 'add');
			this.addOrRemoveClass(this.birdTree, 'animation__tree', 'remove');
	
			// Hide bird container after 2200 milliseconds
			setTimeout(function() {
				that.addOrRemoveClass(that.birdContainer, 'animation--show', 'remove');
			}, 2200);

			this.clicked = true;
		}
	}

	nightMode() {
		const that = this;

		// Shows and appends tentacle animation
		this.addOrRemoveClass(this.tentacles, 'tentacles-group--play-animation', 'add');
		
		// Hide bubbles and sun
		this.addOrRemoveClass([this.bubbles, this.sun], 'animation--hide', 'add');
		
		// Show moon, stars and tentacles
		this.addOrRemoveClass([this.tentaclesContainer, this.night], 'animation--show', 'add');
		
		// Swap tree colors so the shade is on the correct side
		this.addOrRemoveClass(this.treeShade, 'tree-shade--white', 'add');
		this.addOrRemoveClass(this.tree, 'tree--blue', 'add');

		// Inverts the colors so it looks like that these items are unaffected by the night swap
		this.addOrRemoveClass([this.contentClass, this.contentTitle, this.siteHeader, this.fireContainer, this.icon], 'content--invert', 'add');

		// Undo all above changes after 2500 milliseconds
		setTimeout(function() {
			that.addOrRemoveClass(that.tentacles, 'tentacles-group--play-animation', 'remove');
			
			that.addOrRemoveClass([that.bubbles, that.sun], 'animation--hide', 'remove');
			
			that.addOrRemoveClass([that.tentaclesContainer, that.night], 'animation--show', 'remove');
			
			that.addOrRemoveClass(that.treeShade, 'tree-shade--white', 'remove');
			that.addOrRemoveClass(that.tree, 'tree--blue', 'remove');

			that.addOrRemoveClass([that.contentClass, that.contentTitle, that.siteHeader, that.fireContainer, that.icon], 'content--invert', 'remove');
		}, 2500);
	}

	valueOne() {
		const that = this;
		let animationDelayTotal = 2.2;
		const animationDelayDeduct = 0.2;

		this.addOrRemoveClass(this.valuePlayButton[0], 'animation--hide', 'add');

		this.addOrRemoveClass(this.popupLove, 'pop-up--play-animation', 'add');
		this.popupLove.style.animationDelay = `${ animationDelayTotal }s`;
		animationDelayTotal -= animationDelayDeduct;
		
		this.addOrRemoveClass(this.popupGroup, 'pop-up--play-animation', 'add');
		this.popupGroup.style.animationDelay = `${ animationDelayTotal }s`;
		animationDelayTotal -= animationDelayDeduct;
		
		this.addOrRemoveClass(this.popup, 'pop-up--play-animation', 'add');
		this.popup.forEach(function(item) {
			item.style.animationDelay = `${ animationDelayTotal }s`;
			animationDelayTotal -= animationDelayDeduct;
		})

		setTimeout(function(){
			that.resetValueOne();
		}, 5000);
		
	}

	resetValueOne() {
		this.addOrRemoveClass(this.popupLove, 'pop-up--play-animation', 'remove');
		this.addOrRemoveClass(this.popupGroup, 'pop-up--play-animation', 'remove');
		this.addOrRemoveClass(this.popup, 'pop-up--play-animation', 'remove');
		this.addOrRemoveClass(this.valuePlayButton[0], 'animation--hide', 'remove');
	}

	valueTwo() {
		const that = this;

		this.addOrRemoveClass(this.valuePlayButton[1], 'animation--hide', 'add');
		
		this.addOrRemoveClass(this.valueTwoCmsButton, 'animation__value-02-cms-btn--play-animation', 'add');
		
		setTimeout(() => {
			let animationDelayTotal = 2;
			const animationDelayDeduct = 0.1;

			that.addOrRemoveClass(that.valueTwoCmsText, 'animation--hide', 'add');

			that.addOrRemoveClass(that.valueTwoCmsImage, 'animation--hide', 'add');
			that.addOrRemoveClass(that.valueTwoCmsButton, 'animation__value-02-cms-btn--play-animation', 'remove');
			that.addOrRemoveClass(that.valueTwoCmsButton, 'animation--hide', 'add');
			
			that.addOrRemoveClass(that.valueTwoWebsite, 'animation__value-02-website--play-animation', 'add');
			
			that.addOrRemoveClass(that.valueTwoWindow, 'animation__value-02-window--play-animation', 'add');

			this.addOrRemoveClass(this.valueTwoHearts, 'animation__value-02-hearts--play-animation', 'add');
			this.valueTwoHearts.forEach(function(item) {
				item.style.animationDelay = `${ animationDelayTotal }s`;
				animationDelayTotal += animationDelayDeduct;
			})
		}, 2000);

		setTimeout(() => {
			that.resetValueTwo();
		}, 8000);
	}

	resetValueTwo() {
		this.addOrRemoveClass(this.valueTwoCmsText, 'animation--hide', 'remove');
		this.addOrRemoveClass(this.valueTwoCmsButton, 'animation--hide', 'remove');
		this.addOrRemoveClass(this.valueTwoCmsImage, 'animation--hide', 'remove');
		this.addOrRemoveClass(this.valueTwoWebsite, 'animation__value-02-website--play-animation', 'remove');
		this.addOrRemoveClass(this.valueTwoWindow, 'animation__value-02-window--play-animation', 'remove');
		this.addOrRemoveClass(this.valueTwoHearts, 'animation__value-02-hearts--play-animation', 'remove');
		this.addOrRemoveClass(this.valuePlayButton[1], 'animation--hide', 'remove');
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
