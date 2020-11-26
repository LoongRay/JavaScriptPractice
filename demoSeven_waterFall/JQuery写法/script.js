$(window).on('load',function () {
	waterfall();
	var dataInt = {
		"data" : [
			{"src" : "41.jpg"},
			{"src" : "42.jpg"},
			{"src" : "43.jpg"},
			{"src" : "44.jpg"},
			{"src" : "45.jpg"},
			{"src" : "46.jpg"},
			{"src" : "47.jpg"},
			{"src" : "48.jpg"},
			{"src" : "49.jpg"},
			{"src" : "50.jpg"},
			{"src" : "51.jpg"},
			{"src" : "52.jpg"},
			{"src" : "53.jpg"},
			{"src" : "54.jpg"},
			{"src" : "55.jpg"},
			{"src" : "56.jpg"},
			{"src" : "57.jpg"},
			{"src" : "58.jpg"},
			{"src" : "59.jpg"}
		]
	};
	$(window).on('scroll',function () {
		if (checkScrollSlide){
			$.each(dataInt.data,function (key,value) {
				//console.log(key +':' + value + '<br/>');
				//console.log(value);
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				console.log('../images/' + $(value).attr('src'));
				var oImg = $('<img>').attr('src','../images/' + $(value).attr('src'));
				oImg.appendTo($(oPic));
			})
			waterfall();
		}
	})
});

function waterfall() {
	var $boxs = $('#main>div');
	//获取单个图片盒子的宽度,使用outerWidth()获取的宽度包括内外边距
	//使用width()方法获取到的宽度不包括内外边距
	var w = $boxs.eq(0).outerWidth();
	console.log(w);
	var cols = Math.floor($(window).width()/w);
	console.log($(window).width());
	console.log(cols);
	$('#main').width(w*cols).css('margin','0 auto')
	var hArr = [];
	$boxs.each(function (index , value) {
		//console.log(index);//打印图片的索引
		var h = $boxs.eq(index).outerHeight();
		if (index<cols){
			hArr[index]=h;
		}else {
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH + 'px',
				'left':minHIndex*w + 'px'
			})
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
	})
	console.log(hArr);
}

function checkScrollSlide() {
	var $lastBox = $('#main>div').last();
	var $lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return ($lastBoxDis<scrollTop + documentH)?true:false;
}