import fullpage from 'fullpage.js';

class FullPage {
	constructor(){
		this.fullpageId = '#fullpage';
		this.initalise();
	}

	initalise() {
		new fullpage(this.fullpageId, {
			
			licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
			verticalCentered: true
		});
	}
}

export default FullPage;
