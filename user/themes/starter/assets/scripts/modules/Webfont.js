import webfont from "webfontloader";

function Webfont(){
	webfont.load({
    	google: {
      		families: ['Tinos:400,400i,700,700i', 'Raleway:400,700,600']
		},
		custom: {
			families: ['fontawesome'],
			urls: ['user/themes/starter/assets/font-awesome/css/font-awesome.min.css']
		}
  	});
}

export default Webfont;