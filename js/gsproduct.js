/**
 * Created by 糯米 on 2017/9/1.
 */
$(function(){
  //获取店铺
  var shopid=0; //默认shopid
  var areaid=0; //默认areaid
  var lis=$(".tit>ul>li>a");
//获取初始页面的列表
  getlist();
 //获取商铺
  getgsshops();
  function getgsshops() {
    Route.getgsshop(function (res) {
      lis.eq(0).click(function () {
        togglelist(".pricelis", ".arealis", ".shoplis");
        $(".shoplis").html(template("shoplist", res));
      })
      //点击商铺内部选项
      listclick($(".shoplis"),0);
    })
  }
  //获取地区
  getgsareas();
  function getgsareas() {
    Route.getgsshoparea(function (res) {
      lis.eq(1).click(function () {
        togglelist(".shoplis", ".pricelis", ".arealis");
        $(".arealis").html(template("arealist", res));
      })
      //点击地区内部选项
      listclick($(".arealis"),1);
    });
  }
  //点击全部价格
  lis.eq(2).click(function(){
    togglelist(".shoplis",".arealis",".pricelis");
  })
  //显示隐藏列表
  function togglelist(listone,listtwo,listthree){
    $(listone).addClass("hide");
    $(listtwo).addClass("hide");
    $(listthree).toggleClass("hide");
  }
  //列表点击事件函数
  function listclick(dom,i){
    dom.on("click","li",function(){
      var $this=$(this);
      $this.children("span").show().parent().siblings().children("span").hide();
      shopname=$this.children(".shopName").html();
      console.log(shopname);
      if(dom==$(".shoplis")){
      shopid=$this.data("shopid");
      }else{
        areaid=$this.data("shopid");
      }
      var span= $(".tit>ul>li>a").eq(i).children("span");
      console.log(span);
      console.log(shopid);
      span.html(shopname);
      getlist();
    })
  }
//获取列表函数
  function getlist() {
    Route.getgsproduct(shopid, areaid, function (res) {
      console.log(res);
      $(".pros").html(template("product-list", res));
    })
  }
})
