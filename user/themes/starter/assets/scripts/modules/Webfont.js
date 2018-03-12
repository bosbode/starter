import webfont from "webfontloader";
var config = require('../../../../../../gulp/config.json');

function Webfont(){
	window.FontAwesomeConfig = {
		searchPseudoElements: true
	}

	webfont.load({
    	google: {
      		families: ['Quicksand:400,400i,700,700i', 'Dekko:400']
		},
		custom: {
			families: ['Font Awesome 5 Solid', 'Font Awesome 5 Regular', 'Font Awesome 5 Brands', 'Font Awesome 5 Light'],
			urls: ['../user/themes/' + config.theme + '/assets/font-awesome/css/fontawesome-all.min.css']
		}
  	});
}

export default Webfont;