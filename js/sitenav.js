/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  Route.getsitenav(function(res){
    console.log(res);
  $(".main").html(template("list",res));
  })
})