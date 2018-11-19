import $ from 'jquery';
import fullpage from 'fullpage.js';
import lottie from 'lottie-web';

class FullPage {
	constructor(){
		this.fullpageId = '#fullpage';
		this.initalise();
	}

	initalise() {
		new fullpage(this.fullpageId, {
			
			licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
			verticalCentered: true,

			afterLoad: function(origin, destination, direction){
				var loadedSection = $(this);
				
				if(destination.index === 0){
					setTimeout(function() {
						lottie.play('logo');
					}, 3000);
				}
			},
			
			onLeave: function(origin, destination, direction){
				var leavingSection = $(this);
		
				//after leaving section 1
				if(origin.index === 0 && direction === 'down'){
					lottie.stop('logo');
				}
		
				else if(origin.index === 0 && direction === 'up'){
					lottie.stop('logo');
				}
			}
		});
	}
}

export default FullPage;
