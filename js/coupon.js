/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  Route.getcoupon(function(res){
    $(".main").html(template("coupon",res));
  })
})