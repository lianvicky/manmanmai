$(function () {
  var productid = $.getUrlParam("productid");
  Route.getproduct(productid, function (res) {
   //填充主体部分
    $(".main").html(template("tpl", res));
    //填充标题栏第三个a
    $(".third-a").html(template("productName",res));
    //获取数据中的category
    var categoryid = res.result[0].categoryId||0;
    //根据上述的category填充标题栏第二个a
    Route.getcategorybyid(categoryid, function (res) {
      $(".second-a").html(template("category",res));
    })
    //评价部分
  Route.getproductcom(productid,function(res){
    $(".product-com-list").html(template("dis",res));
  })
  });
})

