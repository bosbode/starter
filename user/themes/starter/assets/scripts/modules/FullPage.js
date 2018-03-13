import $ from "jquery";
import fullpage from "fullpage.js";

class FullPage {
	constructor(){
		this.fullpage = $("#fullpage");
		this.initalise();
	}

	initalise() {
		
		this.fullpage.fullpage();
	}
}

export default FullPage;
