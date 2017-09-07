// 千万不要多此一举加上一个入口函数,并且这个JS建议放到最前面
// 获取html这个标签
var oHtml = document.documentElement;
// 获取屏幕的宽度
var screenWidth = oHtml.offsetWidth;
// 设计图的宽度
var uiWidth = 750;
// 设计图对应的fontsize字体大小
var font = 40;
// 得到的比例
var bili = uiWidth/font;

window.onresize = getSize;
// 上来先初始化一下
getSize();

function getSize(){
	screenWidth = oHtml.offsetWidth;
	if(screenWidth <= 320){
		oHtml.style.fontSize = 320/bili + 'px';
	}else if(screenWidth >= uiWidth){
		oHtml.style.fontSize = uiWidth/bili + 'px';
	}else{
		oHtml.style.fontSize = screenWidth/bili + 'px';
	}
}