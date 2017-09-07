/**
 * Created by 糯米 on 2017/8/31.
 */
$(function(){
  Route.getinlanddiscount(function(res){
    console.log(res);
$(".pro").html(template("pro",res));
  })
})
