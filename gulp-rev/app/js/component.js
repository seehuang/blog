window.My = window.My || {};

My.component = {

  init:function(){
    this.headerDom = $("#header");
    this.footerDom = $("#footer");
    this.headerDom.html(this.header());
    this.footerDom.html(this.footer());
    this.getBizScopeList();
  },
  /**
   * 获取业务范围列表
   */
  getBizScopeList:function(){
    businessSub = $("#businessSub");
    let res = My.fetch.getBizScopeList();
    businessSub.empty()//清空之后 再追加
    var html = ''
    for(let i=0;i<res.length;i++){
      html += `<li><a href="business.html?id=${res[i].id}" title="${res[i].scopeName}">${res[i].scopeName}</a></li>`
    }
    businessSub.html(html)
  },
  header: function(){
    var headerTemp = ''
    headerTemp =  [' <div class="container">',
    '        <div class="row">',
    '          <div class="col-md-4 col-sm-4">',
    '            <img style="width:100px;position:absolute;top:-8px" src="http://pb1bumqx4.bkt.clouddn.com/WeChat%20Image_20180628220213.png" alt="Logo" />',
    '            <br>',
    '          </div>',
    '          <div class="col-md-4 col-sm-4 text-center">',
    '            <a href="/" title="">',
    '              <img src="img/icon/logo2.png" alt="Logo" /> </a>',
    '          </div>',
    '          <div class="col-md-4 col-sm-4 text-right nopadding">',
    // '            <div id="search">',
    // '              <input type="text" name="keyword" class="keyword" id="keyword" value="" onFocus=this.select() placeholder="搜寻" />',
    // '              <input type="image" class="search-btn" name="btnSubmit" src="img/icon/header-search.png" />',
    // '            </div>',
    '          </div>',
    '        </div>',
    '        <div class="navbar-header">',
    '          <div class="row">',
    '            <div class="col-md-4 col-xs-4">',
    '              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navs" aria-expanded="false">',
    '                <span class="sr-only">Toggle navigation</span>',
    '                <span class="icon-bar"></span>',
    '                <span class="icon-bar"></span>',
    '                <span class="icon-bar"></span>',
    '              </button>',
    '            </div>',
    '            <div class="col-md-4 col-xs-4">',
    '              <a href="/" title="Gallant">',
    '                <img src="http://pb1bumqx4.bkt.clouddn.com/248269621340579907.png" alt="Logo" class="img-responsive" /> </a>',
    '            </div>',
    '          </div>',
    '        </div>',
    '        <div class="collapse navbar-collapse" id="navs">',
    '          <ul class="nav navbar-nav">',
    '            <li>',
    '              <a href="index.html" class="current_menu">首页</a>',
    '            </li>',
    '            <li>',
    '              <a href="aboutus.html" class="">关于我们</a>',
    '            </li>',
    '            <li class="haschild mo">',
    '              <a href="" class="">业务范围</a>',
    '              <ul class="sub-nav" id="businessSub">',
    '                <li>',
    '                  <a href="business.html?id=3" title="金融及银行业务"> 金融及银行业务</a>',
    '                </li>',
    '                <li>',
    '                  <a href="business1.html" title="公司破产">公司破产</a>',
    '                </li>',
    '                <li>',
    '                  <a href="business2.html" title="中国贸易及投资">房地产与建设工程团队</a>',
    '                </li>',
    '                <li>',
    '                  <a href="business3.html" title="刑事辩护">刑事辩护</a>',
    '                </li>',
    '              </ul>',
    '            </li>',
    '            <li>',
    '              <a href="lawyer.html" class="">律师名册</a>',
    '            </li>',
    '            <li>',
    '              <a href="office.html" class="">办事处</a>',
    '            </li>',
    '            <li>',
    '              <a href="job.html" class="">就业机会</a>',
    '            </li>',
    '            <li>',
    '              <a href="news.html" class="">我所消息</a>',
    '            </li>',
    '          </ul>',
    '        </div>',
    '      </div>'].join("");
    return headerTemp;
  },
  footer: function(){
    var footTemp = '';
    footTemp = ['     <div class="container">',
    '        <div class="row" style=" margin-top: 20px;">',
    '          <div class="col-md-3 col-sx-6 col-sm-6" style="margin-top:15px">',
    '             <div class="footer-item-icon"><img src="http://pb1bumqx4.bkt.clouddn.com/phoneitem.png"></div>',
    '             <div class="footer-item-title">服务热线<br>0516-83831999</div>',
    '             <div class="clear"></div>',
    '           </div>',
    '          <div class="col-md-3  hidden-xs hidden-sm" style="margin-top:15px">',
    '             <div class="footer-item-icon"><img src="http://pb1bumqx4.bkt.clouddn.com/qqitem.png"></div>',
    '             <div class="footer-item-title">在线客服<br><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3152625878&site=qq&menu=yes" style="color:#fff;cursor:pointer">点击此处沟通</a></div>',
    '             <div class="clear"></div>',
    '           </div>',
    '          <div class="hidden-md hidden-lg col-sx-12 col-sm-12" style="margin-top:15px">',
    '             <div class="footer-item-icon"><img src="http://pb1bumqx4.bkt.clouddn.com/qqitem.png"></div>',
    '             <div class="footer-item-title">在线客服<br><a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=3152625878&version=1&src_type=web&web_src=oicqzone.com" style="color:#fff;cursor:pointer">点击此处沟通</a></div>',
    '             <div class="clear"></div>',
    '           </div>',
    '          <div class="col-md-3 col-sx-6 col-sm-6" style="margin-top:15px">',
    '             <div class="footer-item-icon"><img src="http://pb1bumqx4.bkt.clouddn.com/emailitem.png"></div>',
    '             <div class="footer-item-title">邮箱<br>dayulvsuo@126.com</div>',
    '             <div class="clear"></div>',
    '           </div>',
    '          <div class="col-md-3 col-sx-6 col-sm-6" style="margin-top:15px;text-align:center">',
    '             <div class="footer-erweima"><img src="http://pb1bumqx4.bkt.clouddn.com/WeChat%20Image_20180628221636.jpg"></div>',
    '             <div class="footer-erweima-title">扫一扫公众号</div>',
    '           </div>',
    '         </div>',
    '        <div class="row" style="margin-top:10px">',
    '          <div class="col-md-4">',
    '            <p class="text-left">律师事务所2018版权所有，不得转载。</p>',
    '          </div>',
    '          <div class="col-md-8">',
    '            <ul>',
    '              <li>',
    '                <a href=""></a>',
    '              </li>',
    '            </ul>',
    '          </div>',
    '        </div>',
    '      </div>'].join("");
    return footTemp;
  }
  
}

My.component.init()
My.config.loadJs("service");