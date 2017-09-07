/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  var brandTitleid= $.getUrlParam("brandtitleid");
  //var brandTitleid;
  var pagesize=4;
  var productid; //产品id
  var brandTitle; //品牌名
  var productImg; //评论区图片
  var productName; //产品名字

  //获取标题
  Route.getbrandtitle(function(res){
    console.log(res);
   for(var i=0;i<res.result.length;i++){
     if(res.result[i].brandTitleId==brandTitleid){
       brandTitle=res.result[i].brandTitle.replace("十大品牌","");
     }
   }
  })
  //获取品牌
  getbrand();
  //获取品牌
  function getbrand() {
    Route.getbrand(brandTitleid, function (res) {
      $(".brand-list").html(template("bd-list", res));
      console.log(res);
      console.log((brandTitle + "哪个牌子好").replace("  ", ""));
      $(".topname").html(brandTitle);
      getbrandproductlist();
    })
  }
  //获取排行
  function getbrandproductlist() {
    Route.getbrandproductlist(brandTitleid, pagesize, function (res) {
      if (res.result.length >= 1) {
        productImg = res.result[0].productImg;
        productName = res.result[0].productName;
        productid = res.result[0].productId;
        $(".com-top>.pics").html(productImg);
        $(".com-top>.info").html(productName);
      }
      $(".pro-sell").html(template("sell", res));
      $(".topname").html(brandTitle);
      getproductCom();
    })
  }
  //获取评论
  function getproductCom() {
    Route.getproductcom(productid, function (res) {
      $(".conments").html(template("com", res));
      $(".topname").html(brandTitle);
      $(".com-top>.pics").html(productImg);
      $(".com-top>.info").html(productName);
    })
  }
})