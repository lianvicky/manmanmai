/**
 * Created by 糯米 on 2017/8/30.
 */
$(function(){
  var pagecount=0;
  //获取第一页数据
  setmoneyProduct($(".list-pro"));
  function setmoneyProduct(dom){
    Route.getmoneyProduct(function(data){
      console.log(data);
      var totalCount=data.totalCount;
      dom.html(template("moneyCtrl",data));
      pagecount=Math.ceil(totalCount/data.pagesize);
      getpage(".list-pro",pagecount,"moneyCtrl",0);
    })
  }
  function getpage(dom,pagecount,templateid,pageid){
    //填充选择框数据
    var list=$(dom);
    var select=$("select");
    for(var i=0;i<pagecount;i++){
      var $option=$("<option></option>");
      $option.html((i+1)+"/"+pagecount);
      $option.attr("value",(i+1)+"/"+pagecount);
      select.append($option);
    }
    //改变选择框获取数据
    select.on("change",function(){
      pageid=$(this).val().replace("/"+pagecount,"")-1;
      Route.getmoneyProduct(pageid,function(res){
        list.html(template(templateid,res));
      })
    })
    //点击上一页下一页获取数据
    var btns=$(".page>button");
    btns.click(function(){
      var $this=$(this);
      if($this.data("page")=="prev"){
        pageid--;
        if(pageid<0){
          pageid=pagecount-1;
        }
      }else if($this.data("page")=="next"){
        pageid++;
        if(pageid>=pagecount){
          pageid=0;
        }
      }
      Route.getmoneyProduct(pageid,function(res){
        list.html(template(templateid,res));
      })
      select.val((pageid+1)+"/"+pagecount);
    })
  }
})
