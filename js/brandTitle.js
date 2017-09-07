/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  //获取品牌列表
  Route.getbrandtitle(function(res){
    $(".brand-list").html(template("bd-tit",res));
  })
})