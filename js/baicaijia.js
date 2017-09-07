$(function(){
  //获取标题列表
  Route.getbaicaijiatitle(function(res){
    $(".list-title>#titles>ul").html(template("title",res));

    //设置标题列表滑动
    var myScroll = new IScroll('#titles',{scrollX:true,scrollY:false});
    var list=$(".list-title>#titles>ul>li");
    //获取列表
    var titleid=0;
    if($.getUrlParam("titleid")){
      titleid=$.getUrlParam("titleid");
    }

    //$('#titles').on('click', 'li', function() {
    //  // 排他切换样式
    //  $(this).addClass('active').siblings().removeClass('active');
    //  // 让其第一个显示
    //  // 滚动到哪一个元素
    //  myScroll.scrollToElement($(this)[0]);
    //});
    list.each(function(e,i){
      if(e==titleid){
        $(i).children("a").addClass("active");
        myScroll.scrollToElement($(i)[0]);
      }
    })
    Route.getbaicaijiaproduct(titleid,function(res){
      $(".list-pro").html(template("list",res));
    })
  })

})