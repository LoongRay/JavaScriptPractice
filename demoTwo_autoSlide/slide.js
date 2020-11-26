(function () {


	//初始化幻灯片序号:默认开始播放第一张
	var slideIndex = 1;

	var prev = document.getElementById('prev'),//获取上一张按钮
		next = document.getElementById('next'),//获取下一张按钮
		controls = document.getElementsByClassName('contrl-node'),//获取直接跳转按钮
		slideItems = document.getElementsByClassName('slide-item');//获取幻灯片
	//展示幻灯片
	showSlides(slideIndex);

	//自动播放
	function auto() {
		setInterval(
			function () {
				slidesPlus(1);
			}, 5000);
	}

	auto();

	//播放下一张,若播放上一张传入负值参数
	function slidesPlus(n) {
		showSlides(slideIndex += n);
	}

	//直接播放指定序号幻灯片
	function currentSlides(n) {
		showSlides(slideIndex = n)
	}

	function showSlides(n) {
		for (var i = 0; i < slideItems.length; i++) {
			slideItems[i].style.display = 'none';
		}
		for (var i = 0; i < controls.length; i++) {
			controls[i].className = controls[i].className.replace(' active', "");//清空直接跳转按钮激活样式
		}

		if (n > slideItems.length) {
			slideIndex = 1
		}//在最后一张幻灯片点击下一张,返回第一张
		if (n < 1) {
			slideIndex = slideItems.length
		}//在第一张幻灯片点击上一张,返回最后一张

		slideItems[slideIndex - 1].style.display = 'block';//播放幻灯片
		controls[slideIndex - 1].className += ' active';//给直接跳转按钮设置激活样式
	}

	//翻转上一页幻灯片
	prev.onclick = function () {
		slidesPlus(-1);
	};
	//翻转下一页幻灯片
	next.onclick = function () {
		slidesPlus(1);
	};

	//直接切换幻灯片
	controls[0].onclick = function () {
		currentSlides(1);
	};

	controls[1].onclick = function () {
		currentSlides(2);
	};

	controls[2].onclick = function () {
		currentSlides(3);
	};
})();