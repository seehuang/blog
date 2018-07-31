/*
* @Author: hc
* @Date:   2018-07-17 11:15:58
* @Last Modified by:   hc
* @Last Modified time: 2018-07-31 15:02:59
*/

// 主程序，场景类
class Main {

	constructor(){
		this.bgWidth = 320;
		this.bgHeight = 963;
		this.bgPosition = 0;
		this.bgReset = 0;
		this.bgMoveSpeed = 1;
		this.spriteList = []; //负责存储精灵对象
		this.init();
	}

	init(){
		const _this = this;
		const canvas = document.querySelector("#canvas");
		this.ctx = canvas.getContext("2d");
		this.girl = new Girl(this.ctx)
		this.drawBg();
		this.start();

	}

	// 开始游戏
	start(){
		const _this = this;
		
		// _this.rollBg()
		//  new Girl(_this.ctx);//绘制女孩
		//  _this.generateSprite();//生成精灵
		// //绘制精灵
		// for(let i =0;i<_this.spriteList.length;i++){
		// 	if(_this.spriteList[i]){
		// 		_this.spriteList[i].drawSprite(_this.ctx);
		// 		_this.spriteList[i].down(_this.ctx,_this.spriteList);

		// 	}
		// }
		
			_this.ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight);
			_this.rollBg()
	
			_this.girl.init();
			
			 _this.generateSprite();//生成精灵
			//绘制精灵
			for(let i =0;i<_this.spriteList.length;i++){
				if(_this.spriteList[i]){
					_this.spriteList[i].drawSprite(_this.ctx);
					_this.spriteList[i].down(_this.ctx,_this.spriteList);
				}
				
			}
			_this.girl.eatFood(_this.spriteList)
		 requestAnimationFrame(_this.start.bind(_this))



		// const girl = new Girl(_this.ctx);//绘制女孩
		
		// this.timer= setInterval(function(){
		
		// 	_this.ctx.clearRect(0, 0, _this.bgWidth, _this.bgHeight);
		// 	_this.rollBg()
	
		// 	girl.init();
			
		// 	 _this.generateSprite();//生成精灵
		// 	//绘制精灵
		// 	for(let i =0;i<_this.spriteList.length;i++){
		// 		if(_this.spriteList[i]){
		// 			_this.spriteList[i].drawSprite(_this.ctx);
		// 			_this.spriteList[i].down(_this.ctx,_this.spriteList);
		// 		}
				
		// 	}
		// 	girl.eatFood(_this.spriteList);
		// },Math.round(1000/60));



	}

	// 结束游戏
	stop(){
		clearInterval(this.timer)
	}

	//重新开始游戏
	reset(){

	}



	// 主程序调用 生成精灵
	generateSprite(){
		if(this.spriteList.length<5){
			if(Math.random()*100<=2){
				let typeBase = Math.random()*10;
				const left = Math.random()*this.bgWidth;
				const id = this.spriteList.length;
				const type = typeBase > 5 ? 0 : 1; 
				const sprite = new Sprite(left,type,id);
				this.spriteList.push(sprite);
			}
		}
	}


	//绘制背景
	drawBg(){
		const _this = this;
		this.bg = new Image();
		this.bg.onload = function(){
			_this.ctx.drawImage(_this.bg,0,0,_this.bgWidth,_this.bgHeight)
		}
		this.bg.src="./img/bg.png";
	}
	// 背景自动滚动
	// 视差滚动法则
	rollBg(){
		if(this.bgPosition>=this.bgHeight){
			this.bgReset = 0;
		}
		this.bgPosition = ++this.bgReset*this.bgMoveSpeed;
		this.ctx.drawImage(this.bg,0,this.bgPosition-this.bgHeight,this.bgWidth,this.bgHeight);
		this.ctx.drawImage(this.bg,0,this.bgPosition,this.bgWidth,this.bgHeight);
	}
}


class ImageManage{

		constructor(){
			this.imgArray = [];
		}
		createImage (src){
			return typeof this.imgArray[src] != 'undefined' ? this.imgArray[src] : (this.imgArray[src] = new Image(), this.imgArray[src].src = src, this.imgArray[src])
		}
		loadImage(arr, callback){
			for(let i=0,l=arr.length; i<l; i++){
				let img = arr[i];
				this.imgArray[img] = new Image();
				this.imgArray[img].onload = function(){
					if(i==l-1 && typeof callback=='function'){
						callback();
					}
				}
				this.imgArray[img].src = img
			}
		}
}


//主角类
class Girl{

	constructor(ctx){
		new ImageManage().loadImage(['img/girl.png']);
		this.ctx=ctx;
		this.width = 80;
		this.height = 80;
		this.left = 130;
		this.top = 450;
		this.bg = new ImageManage().createImage(['img/girl.png']);
		this.tab();
	}

	init(){
		this.paintGirl()
	
	}

	// 绘制女孩
	paintGirl(){
		const _this = this;
			_this.ctx.drawImage(_this.bg,_this.left,_this.top,_this.width,_this.height);
	}

	// 监听整个canvas的点击事件
	tab(event){
		const _this = this;
		const canvas = $("#canvas");
		let move = false;
		canvas.on("mousedown",function(e){
			_this.moveGirl(e);
			move =true;
		});
		canvas.on("mousemove",function(e){
			e.preventDefault();
			if(move){
				  _this.moveGirl(e);
			}
		});
		canvas.on("mouseup",function(e){
			move=false
		});
	}

	// 拖动女孩
	moveGirl(event){
		let moveToLeft = event.offsetX;
		let moveToTop = event.offsetY;
		this.left = moveToLeft- this.width/2 - 16;;
		this.top = moveToTop- this.height/2;;
		this.paintGirl()
	}


	// 女孩接粽子或者鞭炮
	eatFood(spritelist){
		for(let i=0;i<spritelist.length;i++){
			let sp = spritelist[i];
			if(sp){
				let h = this.top+this.height/2-(sp.top+sp.height/2);
				let w = this.left+this.width/2-(sp.left+sp.width/2);
				let y = Math.sqrt(h*h+w*w);
				if(y <= this.height/2+sp.height/2){

					if(sp.type == 1){
						console.log("吃了粽子")
					}
					else{
						console.log("吃了鞭炮")
					}
					spritelist[sp.id] = null;
				}
			}
		}
	}
}



function ImageMonitor(){
	var imgArray = [];
	return {
		createImage : function(src){
			return typeof imgArray[src] != 'undefined' ? imgArray[src] : (imgArray[src] = new Image(), imgArray[src].src = src, imgArray[src])
		},
		loadImage : function(arr, callback){
			for(var i=0,l=arr.length; i<l; i++){
				var img = arr[i];
				imgArray[img] = new Image();
				imgArray[img].onload = function(){
					if(i==l-1 && typeof callback=='function'){
						callback();
					}
				}
				imgArray[img].src = img
			}
		}
	}
}

// 精灵类
class Sprite{

	constructor(left,imgType,id,ctx,main){
		this.width = 50;
		this.height = 50;
		this.left = left;
		this.top = -50;
		this.id = id; //id用来垃圾回收
		this.type = imgType;
		this.pic = imgType > 0 ? 'img/zz.png':'img/bp.png';
		this.speed=2;
		this.loop=0;
		this.bg = new ImageManage().createImage([this.pic]);
		

	}

	// 画掉落的粽子或者鞭炮
	drawSprite(ctx){
		const _this = this;
		ctx.drawImage(_this.bg,_this.left,_this.top,_this.width,_this.height);
	}

	// 粽子落下
	down(ctx,spriteList){
		this.top = ++this.loop + this.speed;
		if(this.top > 528){
			spriteList[this.id] = null;
		}
		else{
			this.drawSprite(ctx);
		}
	}
}


new Main();
