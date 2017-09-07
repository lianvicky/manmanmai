$(function(){
  setMenu($(".row"));
  function setMenu(dom) {
    var $lastFour;
    Route.getindexmenu(function (res) {
      dom.html(template("menu",res));
      $lastFour = $(dom).children('.item:nth-last-child(-n+4)');
      $lastFour.addClass('hide');
      dom.click(function(){
        $lastFour.toggleClass("hide");
      });
    });
  }
    //第一页商品
    setmoneyProduct($(".list-pro"));
    function setmoneyProduct(dom){
      Route.getmoneyProduct(function(data){
        dom.html(template("moneyCtrl",data));
      })
    }
})