import $ from "jquery";

class Modal {
	constructor() {
		this.openModalButton = $("#modal-link");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.resengoBookNow = $("#resengo-booknow");
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visable");
		this.appendModalScript();
		return false;
	}

	appendModalScript() {
		if(window.location.href.indexOf("/en") > -1) {
			$.getScript("//www.resengo.com/WID/Widget/Cors", function(){
				bookNow({companyID: '1457291', target: '#resengo-booknow', language: 'EN'});
			});
		} else {
			$.getScript("//www.resengo.com/WID/Widget/Cors", function(){
				bookNow({companyID: '1457291', target: '#resengo-booknow', language: 'NL'});
			});
		};
	}

	closeModal() {
		this.modal.removeClass("modal--is-visable");
		this.resengoBookNow.empty();
	}

}

export default Modal;