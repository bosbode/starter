import webfont from "webfontloader";

function Webfont(){
	webfont.load({
    	google: {
      		families: ['Quicksand:400,400i,700,700i', 'Josefin+Slab:700']
		},
		custom: {
			families: ['fontawesome'],
			urls: ['user/themes/starter/assets/font-awesome/css/fontawesome.min.css']
		}
  	});
}

export default Webfont;