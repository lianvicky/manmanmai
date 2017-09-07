/**
 * Created by 糯米 on 2017/8/28.
 */
(function(window){
  var Route={
    /* 提出 URL 以备 提取接口 可以集中管理 */
    baseUrl:"http://127.0.0.1:9090",
    /* ------ 首页 api 数据请求 ------ */
    // 获取首页上面的菜单栏数据
    getindexmenu: getindexmenu,
    //获取首页上商品列表数据
    getmoneyProduct:getmoneyProduct,

    /* ------ 分类功能界面 ------- */
    //获取categorytitle
    getcategorytitle:getcategorytitle,
    //获取category
    getcategory:getcategory,

    // 根据商品id获取省钱控商品的详细信息
    getmoneyctrlproduct : getmoneyctrlproduct,

    /* ------ 商品详情 ------- */
    //获取详情页商品
    getproduct:getproduct,
    //获取商品评论信息
    getproductcom:getproductcom,

    /* ------ 商品列表功能界面 ------- */
   //根据分类的id获取分类的名称
    getcategorybyid:getcategorybyid,
   //根据分类id获取该分类的商品列表并渲染到页面
    getproductlist:getproductlist,

    /* ------ 国内折扣商品功能界面 ------- */
    //国内折扣商品列表数据
    getinlanddiscount:getinlanddiscount,
    //根据商品id获取国内折扣商品的详细信息
    getdiscountproduct:getdiscountproduct,

    /* ------- 白菜价商品页面 -------- */
    //获取白菜价页面的tab栏标题数据
    getbaicaijiatitle:getbaicaijiatitle,
    //根据标题id获取该标题对应的商品列表
    getbaicaijiaproduct:getbaicaijiaproduct,

    /* -------- 优惠券页面 -------- */
    //获取优惠券标题信息
    getcoupon:getcoupon,
    //根据优惠券标题id获取该标题对应的列表
    getcouponproduct:getcouponproduct,
    //获取凑单品的店铺的信息

    /* ------- 凑单品页面 --------- */
    getgsshop:getgsshop,
    //获取凑单品的区域的信息
    getgsshoparea:getgsshoparea,
    //根据店铺的id和区域的id获取该店铺该区域的商品列表信息
    getgsproduct:getgsproduct,

    /* -------- 商城导航页面 ---------- */
    //获取所有商城导航的列表信息
    getsitenav:getsitenav,
    //获取品牌大全的标题信息

    /* ------- 品牌大全页面 --------- */
    getbrandtitle:getbrandtitle,
    //根据品牌的标题id获取该品牌标题下的十大品牌列表
    getbrand:getbrand,
   //根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品
    getbrandproductlist:getbrandproductlist
  }
  // 获取首页上面的菜单栏数据
  function getindexmenu(callback){
    var url=Route.baseUrl+"/api/getindexmenu";
    $.get(url,function(res){
      callback&&callback(res);
    },"json")
  }
  //获取首页上商品列表数据
  function getmoneyProduct(callback){
    var pageid;
    var callback;
    if(arguments.length===1){
      pageid=0;
      callback=arguments[0];
    }else{
      pageid=arguments[0];
      callback=arguments[1];
    }
    var url=Route.baseUrl+"/api/getmoneyctrl";
    $.get(url,{pageid:pageid},function(res){
      callback&&callback(res);
    },"json");
  }
  //获取category页标题
  function getcategorytitle(callback){
    var url=Route.baseUrl+"/api/getcategorytitle";
    $.get(url,function(res){
      callback&&callback(res);
    },"json");
  }
  //获取category页内容
  function getcategory(titleid,callback){
    var url=Route.baseUrl+"/api/getcategory";
    $.get(url,{titleid:titleid},function(res){
       callback&&callback(res);
    })
  }
  //获取产品
  function getproduct(productid,callback){
    var url=Route.baseUrl+"/api/getproduct";
    $.get(url,{productid:productid},function(res){
      callback&&callback(res);
    })
  }
  //获取商品评论信息
  function getproductcom( productid, callback ) {
    var url = Route.baseUrl + '/api/getproductcom';
    $.get( url, { productid : productid }, function( res ) {
      callback && callback( res );
    }, 'json' );
  }
  //根据商品id获取国内折扣商品的详细信息
  function getmoneyctrlproduct( productid, callback ) {
    var url = Route.baseUrl + '/api/getmoneyctrlproduct';
    $.get( url, { productid : productid }, function( res ) {
      callback && callback( res );
    }, "json" );
  }
  //根据分类的id获取分类的名称
  function getcategorybyid(categoryid,callback){
    var url=Route.baseUrl+"/api/getcategorybyid";
    $.get(url,{categoryid:categoryid},function(res){
      callback && callback(res);
    },"json")
  }
  //根据分类id获取该分类的商品列表并渲染到页面
  function getproductlist(categoryid,pageid,callback){
    var url=Route.baseUrl+"/api/getproductlist";
    var data={
      categoryid : categoryid ? categoryid : 0,
      pageid: pageid ? pageid : 1
    }
    $.get(url,data,function(res){
      callback && callback(res);
    },"json");
  }
 
  //国内折扣商品列表数据
  function getinlanddiscount(callback){
    var url=Route.baseUrl+"/api/getinlanddiscount";
    $.get(url,function(res){
      callback && callback(res);
    },"json");
  }
  //根据商品id获取国内折扣商品的详细信息
  function getdiscountproduct(productid,callback){
    var url=Route.baseUrl+"/api/getdiscountproduct";
    $.get(url,{productid:productid},function(res){
      callback && callback(res);
    },"json");
  }
  //获取白菜价页面的tab栏标题数据
  function getbaicaijiatitle(callback){
    var url=Route.baseUrl+"/api/getbaicaijiatitle";
    $.get(url,function(res){
      callback&&callback(res);
    },"json")
  }
 //根据标题id获取该标题对应的商品列表
  function getbaicaijiaproduct(titleid,callback){
    var url=Route.baseUrl+"/api/getbaicaijiaproduct";
    if(arguments.length<2){
      titleid=0;
    }
    $.get(url,{titleid:titleid},function(res){
      callback &&callback(res);
    },"json")
  }
  //获取优惠券标题信息
  function getcoupon(callback){
    var url=Route.baseUrl+"/api/getcoupon";
    $.get(url,function(res){
      callback && callback(res);
    })
  }
  //根据优惠券标题id获取该标题对应的列表
  function getcouponproduct(couponid,callback){
    var url=Route.baseUrl+"/api/getcouponproduct";
    $.get(url,{couponid:couponid},function(res){
      callback && callback(res);
    })
   }
  //获取凑单品的店铺的信息
  function getgsshop(callback){
    var url=Route.baseUrl+"/api/getgsshop";
    $.get(url,function(res){
      callback && callback(res);
    })
  }
  //获取凑单品的区域的信息
  function getgsshoparea(callback){
    var url=Route.baseUrl+"/api/getgsshoparea";
    $.get(url,function(res){
      callback && callback(res);
    },"json")
  }
  //根据店铺的id和区域的id获取该店铺该区域的商品列表信息
  function getgsproduct(shopid,areaid,callback){
    var url=Route.baseUrl+"/api/getgsproduct";
    $.get(url,{shopid:shopid,areaid:areaid},function(res){
      callback && callback(res);
    },"json")
  }
  //获取所有商城导航的列表信息
  function getsitenav(callback){
    var url=Route.baseUrl+"/api/getsitenav";
    $.get(url,function(res){
      callback && callback(res);
    },"json")
  }
  //获取品牌大全的标题信息
  function getbrandtitle(callback){
    var url=Route.baseUrl+"/api/getbrandtitle";
    $.get(url,function(res){
      callback && callback(res);
    },"json")
  }
  //根据品牌的标题id获取该品牌标题下的十大品牌列表
  function getbrand(brandtitleid,callback){
    var url=Route.baseUrl+"/api/getbrand";
    $.get(url,{brandtitleid:brandtitleid},function(res){
      callback&&callback(res);
    })
  }
  //根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品
  function getbrandproductlist(brandtitleid,pagesize,callback){
    var url=Route.baseUrl+"/api/getbrandproductlist";
    $.get(url,{brandtitleid:brandtitleid,pagesize:pagesize},function(res){
      callback && callback(res);
    })
  }
  window.Route=Route;
})(window);