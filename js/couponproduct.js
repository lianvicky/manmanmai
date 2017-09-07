/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  //设置各种优惠券标题
  var couponid= $.getUrlParam("couponid");
  Route.getcoupon(function(res){
    conponName=res.result[couponid].couponTitle;
    $("header>h3").html(conponName+"优惠券");
  })
  //设置优惠券列表内容
  Route.getcouponproduct(couponid,function(res){
    console.log(res);
    $(".coupon-list").html(template("pro-list",res));
  //点击优惠券设置轮播图
    var lis=$("li");
    lis.click(function(){
      var $this=$(this);
      //出现模态框
      $(".model").show();
      //获取点击的项的id
      //var id=$this.attr("data-productid");
      var id=$this.data("productid");
      console.log(id);
      //显示模态框的图片
      showPic();
      //显示模态框图片函数
      function showPic() {
        var img = res.result[id].couponProductImg;
        $(".picture").html(img);
      }
      //点击右箭头显示相应的图片
      $(".right-arrow").click(function () {
        id++;
        if (id >= res.result.length) {
          id = 0;
        }
        showPic();
      })
      //点击左箭头显示相应的图片
      $(".left-arrow").click(function () {
        id--;
        if (id <= 0) {
          id = res.result.length - 1;
        }
        showPic();
      })
    })
  })
})