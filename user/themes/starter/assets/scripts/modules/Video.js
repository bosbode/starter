class Video {
	constructor(){
		this.video = document.querySelectorAll('.content__video > source');
		this.initialize();
	}

	initialize() {
		this.video.forEach(this.lazyLoadVideo.bind(this));
	}

	lazyLoadVideo(item) {
		const src = item.getAttribute('data-src');
		const video = item.parentElement;
		item.setAttribute('src', src);
		video.load();
		video.play();
	}
}

export default Video;
