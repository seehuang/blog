/*
* @Author: hc
* @Date:   2018-06-19 09:10:45
 * @Last Modified by: hc
 * @Last Modified time: 2018-06-20 15:25:43
*/

(function(window,$){
	
	window.My = window.My || {};


	My.fetch = {
		init:function() {
			/**
			 * http://localhost:8088
			 * https://server.dylssws.net/admin
			 * @type {String}
			 */
			this.baseUrl = 'https://server.dylssws.net/admin';

			this.imgUrl = 'https://server.dylssws.net/admin/biz/image/'
			
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 获取业务范围
		 * @return   {[type]}   [description]
		 */
		getBizScopeList:function(){
			var _this = this;
			var data = {};
			$.ajax({
				type:'GET',
				async:false,
				url:_this.baseUrl + '/biz/scope/list',
				success:function(res){
					data=res
				},
				error:function(e){
					console.log(e)
				}
			})
			return data
		},
		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 根据id获取 业务详情
		 * @return   {[type]}   [description]
		 */
		getBizScopeDetail:function(id){
			var _this = this;
			var data = '';
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/scope/detail/'+id,
        success:function(res){
          data = res;
        },
        error:function(e){
          console.log(e)
        }
			})
			return data;
		},

		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 通过律师的分组 来查询律师的列表
		 * @return   {[type]}   [description]
		 */
		getLawyersByGroup:function(){
			var _this = this;
			var data = [];
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/lawyer/group/1',
        success:function(res){
          data.push(res);
        },
        error:function(e){
          console.log(e)
        }
			})
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/lawyer/group/2',
        success:function(res){
          data.push(res);
        },
        error:function(e){
          console.log(e)
        }
			})
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/lawyer/group/3',
        success:function(res){
          data.push(res);
        },
        error:function(e){
          console.log(e)
        }
			})
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/lawyer/group/4',
        success:function(res){
          data.push(res);
        },
        error:function(e){
          console.log(e)
        }
			})
			return data;
		},

		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 通过id，查询某个律师的详细信息
		 * @return   {[type]}   [description]
		 */
		getLawyerDetailById:function(id){
			var _this = this;
			var data = '';
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/lawyer/id/'+id,
        success:function(res){
          data = res;
        },
        error:function(e){
          console.log(e)
        }
			})
			return data;
		},

		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe “我所消息” 新闻列表
		 * @return   {[type]}   [description]
		 */
		getNewsList:function(){
			var _this = this;
			var data = '';
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/news/list',
        success:function(res){
          data = res;
        },
        error:function(e){
          console.log(e)
        }
			})
			return data;
		},

		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 通过id获取新闻详情
		 * @return   {[type]}   [description]
		 */
		getNewsDetailById:function(id){
			var _this = this;
			var data = '';
			$.ajax({
				type:'GET',
				async:false,
        url:_this.baseUrl+'/biz/news/detail/'+id,
        success:function(res){
          data = res;
        },
        error:function(e){
          console.log(e)
        }
			})
			return data;
		},

		/**
		 * @Author   hc
		 * @DateTime 2018-06-19
		 * @Describe 根据时间来查询新闻
		 * @return   {[type]}   [description]
		 */
		getNewsByDate:function(){

		}

	}
	My.fetch.init()
})(window,jQuery)
