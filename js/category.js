$(function(){
  Route.getcategorytitle(function(res) {
    $(".row").html(template("tpl", res));
    var lis=$(".row").find("li>a");
    lis.one("click",function(){
      var $this = $(this);
      var titleId = $(this).data('titleid');
      $(this).parent().find('ul').addClass('hide');
      Route.getcategory(titleId,function(data){
        $this.siblings().html(template("tpl1", data));
      })
    })
    $(".row").on("click","a",function(){
       $(this).parent().find('ul').toggleClass('hide');
       })

    })
});
