/**
 * Created by 糯米 on 2017/8/30.
 */
$(function(){
  //获取分类的名称
  var categoryid= $.getUrlParam("categoryid");
  Route.getcategorybyid(categoryid,function(res){
    $(".thispage").append(template("tit",res));
  })

  //根据分类id获取该分类的商品列表并渲染到页面
  var pageid= $.getUrlParam("pageid");
  var pagecount=0;
  Route.getproductlist(categoryid,pageid,function(res){
    console.log(res);
    $(".product-list").html(template("pro-list",res));
    pagecount=Math.ceil(res.totalCount/res.pagesize);
    getpage(".product-list",pagecount,"pro-list",pageid);
  })

  function getpage(dom, pagecount, templateid, pageid) {
    //改变选择框获取数据
    var list = $(dom);
    var select = $("select");
    for (var i = 0; i < pagecount; i++) {
      var $option = $("<option></option>");
      $option.html((i + 1) + "/" + pagecount);
      $option.attr("value", (i + 1) + "/" + pagecount);
      select.append($option);
    }
    select.on("change", function () {
      pageid = $(this).val().replace("/" + pagecount, "");
      Route.getproductlist(categoryid, pageid, function (res) {
        $(".product-list").html(template(templateid, res));
      })
    })
    //点击上一页下一页获取数据
    var btns=$(".page>button");
    btns.click(function(){
      var $this=$(this);
      if($this.data("page")=="prev"){
        pageid--;
        if(pageid<=0){
          pageid=pagecount;
        }
      }else if($this.data("page")=="next"){
        pageid++;
        if(pageid>pagecount){
          pageid=1;
        }
      }
      Route.getproductlist(categoryid,pageid,function(res){
        $(".product-list").html(template(templateid,res));
      })
      select.val((pageid)+"/"+pagecount);
    })
  }
})
