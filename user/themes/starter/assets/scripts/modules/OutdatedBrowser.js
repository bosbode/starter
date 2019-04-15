import outdatedBrowser from 'exports-loader?outdatedBrowser!outdatedbrowser/outdatedbrowser/outdatedbrowser.js';

class OutdatedBrowser {
	constructor(){
		this.initialize();
	}

	initialize() {
		outdatedBrowser({
			bgColor: '#bea2af',
			color: '#ffffff',
			lowerThan: 'grid-template-columns',
			languagePath: ''
		})
	}
}

export default OutdatedBrowser;
