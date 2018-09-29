// 左右轮播
function lrBanner(banner,imgs,dots,leftBtn,rightBtn,time,oWidth,dotactive){
	let banner=document.querySelector(".banner");
	let imgs=document.querySelectorAll("img");
	let dots=document.querySelectorAll(".dots span");
	let leftBtn=document.querySelector(".leftBtn");
	let rightBtn=document.querySelector(".rightBtn");
	let oWidth=parseInt(getComputedStyle(banner,null).width);
	let now=0;
	let next=0;
	let flag=true;
	// 初始状态
	imgs[0].style.left="0";
	dots[0].style.backgroundColor="#FF6700";
	// 鼠标移入轮播点
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<imgs.length;j++){//注意这是变量j，不是变量i
				imgs[j].style.left=oWidth+"px";
				dots[j].classList.remove(dotactive);
			}
			dots[j].classList.add(dotactive);
			imgs[i].style.left="0";
			now=i;//鼠标移入这个dot后，希望下次轮播的是dot后一个的位置，而不是接着num
			next=i;
		}
	}
	// 自动轮播
	let t=setInterval(move,time);
	function move(){
		next++;
		if(next==dots.length){
			next=0;
		}
		imgs[now].style.left="0";
		imgs[next].style.left=oWidth+"px";
		animate(imgs[now],{left:-oWidth},function(){
			dots[now].classList.add(dotactive);
		});
		animate(imgs[next],{left:0},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(dotactive);
			}
			dots[next].classList.add(dotactive);
			now=next;//
			flag=true;
		});
		
	}
	// 鼠标移入banner暂停轮播
	banner.onmouseover=function(){
		clearInterval(t);
	}
	// 鼠标移出banner断续轮播
	banner.onmouseout=function(){
		t=setInterval(move,time);//可以重新赋值，但不可以重新声明
	}
	// 窗口失去焦点暂停轮播
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,time);
	}
	// // 点左箭头轮播
	function moveL(){
		next--;
		if(next<0){
			next=imgs.length-1;
		}
		imgs[now].style.left=0;
		imgs[next].style.left=-oWidth+"px";
		animate(imgs[now],{left:oWidth},function(){
			dots[now].classList.add(dotactive);
		});
		animate(imgs[next],{left:0},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(dotactive);
			}
			dots[now].classList.add(dotactive);
			now=next;
			flag=true;//动画执行完将flag赋值为true,则可以点击
		});
	}
	leftBtn.onclick=function(){
		if(!flag){//判断开关,如果为false则不能点
			return;
		}
		flag=false;
		moveL();
	}
	// 点右箭头轮播
	rightBtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}

}
	