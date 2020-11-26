// (function () {
//
// })();



window.onload = function(){
	waterfall('main','box');
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

	window.onscroll = function () {
		var oParent = document.getElementById('main');
		if (checkScrollSlide){ //checkScrollSlide函数为真则具备滚动加载条件
			//将数据渲染到当页面尾部
			for (var i = 0; i<dataInt.data.length;i++){
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "../images/" + dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
};

//瀑布流方法
function waterfall(parent,box) {
	//获取main下的所有class名为box的元素
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,box);
	console.log(oBoxs);
	//计算整个页面显示的列数(页面宽/box的宽)
	var oBoxWidth = oBoxs[0].offsetWidth;//第一个图片box的宽度
	console.log(oBoxWidth);
	console.log(document.documentElement.clientWidth);
	var cols = Math.floor(document.documentElement.clientWidth/oBoxWidth);//计算列数
	console.log(cols);
	oParent.style.cssText = 'width:' + oBoxWidth*cols + 'px;margin:0 auto;';
	var hArr = [];//存储每一列高度的数组
	for (var i=0 ; i<oBoxs.length; i++){
		if (i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else {
			var minH = Math.min.apply(null,hArr);//获取一组高度中的最小值,内置对象Math无法直接处理数组,故通过apply
			//console.log(minH);
			var index = getminHIndex(hArr,minH);//获取最矮图片的索引值
			oBoxs[i].style.position = 'absolute';
			//oBoxs[i].style.left = oBoxWidth * index + 'px';
			oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
			oBoxs[i].style.top = minH + 'px';
			hArr[index] += oBoxs[i].offsetHeight;
		}
	}
	console.log('各个图片高度:'+hArr);

};

//获取瀑布流元素方法
function getByClass(parent,clsName) {
	var boxArr = new Array(),//用来存储所有class类名为box的元素
		oElements = parent.getElementsByTagName('*');
	for (var i =0;i<oElements.length;i++){
		if (oElements[i].className == clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;//返回存储box元素的数组
};

//获取最矮图片的索引值
function getminHIndex(arr,val) {
	for (var i in arr) {
		if(arr[i] == val){
			return i;
		}
	}
};

//检测是否已经具备滚动加载数据块(图片块)的条件:检查滑动过的内容是否已经超过整个窗口高度
function checkScrollSlide() {
	var oParent = document.getElementById('main');
	var oBoxs = getByClass(oParent,'box');
	var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);//最后一个图片盒子的高度
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;//获取滚动条滚走的距离
	console.log('滚动条滚动的距离:'+scrollTop);
	var vHeight = document.body.clientHeight || document.documentElement.clientHeight; //获取浏览器窗口高度
	return (lastBoxH < scrollTop + vHeight)?true:false;
};






