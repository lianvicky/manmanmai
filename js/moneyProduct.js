/**
 * Created by 糯米 on 2017/8/30.
 */
$(function(){
var productId= $.getUrlParam("productid");
  Route.getmoneyctrlproduct(productId,function(res){
    $(".container").html(template("tpl",res));
  })
})