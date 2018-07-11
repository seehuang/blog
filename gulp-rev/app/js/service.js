/*
* @Author: hc
* @Date:   2018-06-21 16:52:42
 * @Last Modified by: hc
 * @Last Modified time: 2018-06-28 22:05:55
*/
(function(){

	window.My = window.My || My;

	My.qqService = {
		init:function(){
			html = `
				<div class="hidden-xs hidden-sm" style="width:60px;height:60px;position:fixed;right:0;bottom:200px;z-index:1000;border:1px solid #eee;background-color:#f5f5f5;border-radius:5px">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3152625878&site=qq&menu=yes">
            <img style="width: 100%" src="http://pb1bumqx4.bkt.clouddn.com/398704726754610561.png" alt="">
          </a>
				</div>
			`

			$("body").append(html)
		},
	}

	

	My.qqService.init()

})(window,jQuery)