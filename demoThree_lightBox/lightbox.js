//	点击进入预览页面
function openLightbox() {
	document.getElementById('lightbox-model').style.display = "block";
	document.getElementsByClassName('preview-model')[0].style.display = "none";
}

// 点击退出预览页面
function closeLightbox() {
	document.getElementById('lightbox-model').style.display = "none";
	document.getElementsByClassName('preview-model')[0].style.display = "block";
}

//定义全局变量,默认播放第一张幻灯片
	var slideIndex = 1;

//定义播放幻灯片函数
	function showSlides(n){
		var i,
			slideItems = document.getElementsByClassName('header-item'),
			footslides = document.getElementsByClassName('footer-item'),
			prev = document.getElementsByClassName('prev')[0],
			next = document.getElementsByClassName('next')[0];
		if (n>slideItems.length) {slideIndex = 1}
		if (n<1) {slideIndex = slideItems.length}
		for (i=0;i<slideItems.length;i++){
			slideItems[i].style.display = 'none';
		}
		for (i=0;i<footslides.length;i++){
			footslides[i].className = footslides[i].className.replace(' active','');
		}
		slideItems[slideIndex - 1].style.display = 'block';
		footslides[slideIndex - 1].className += ' active';
	}
	//播放幻灯片
	showSlides(slideIndex);

	//切换幻灯片:上一张/下一张
	function addSlides(n){
		showSlides(slideIndex += n)
	}

	//直接放映选择幻灯片
	function currentSlides(n){
		showSlides(slideIndex = n)
	}