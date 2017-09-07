/**
 * Created by 糯米 on 2017/8/31.
 */
$(function(){
  var productid= $.getUrlParam("productid");
  Route.getdiscountproduct(productid,function(res){
    $(".container").html(template("tpl",res));
  })
})