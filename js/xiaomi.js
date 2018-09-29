
window.onload=function(){
	let oA=document.querySelectorAll(".topbar_nav a,.topbar_info a");
	let oTopbar_cart=document.querySelector(".topbar_cart a");
	let name=oTopbar_cart.classList;
	let oCart_menu=document.querySelector(".cart_menu");
	let oHnav=document.querySelectorAll(".header_nav ul li a");
	let oBln=document.querySelectorAll(".nav_left > ul > li");
	let oSub_nav=document.querySelectorAll(".sub_nav1");
	let pre=document.querySelector(".pre");
	let next=document.querySelector(".next");
	let oButs=document.querySelectorAll(".btns > ul > li > a");
	let btns=document.querySelector(".btns");
	let oJ_brickNav=document.querySelectorAll(".J_brickNav ul li");
	let homeelec_content=document.querySelectorAll(".homeelec_content");
	let span4_pic=document.querySelectorAll(".span4 > ul > li > a> img");
	// let brick_item=document.querySelectorAll(".brick_item");
	let review_wrapper=document.querySelectorAll(".review_wrapper");
	let recommend_list=document.querySelectorAll(".xm-carousel-col-5-list > li");
	let home_right_bar=document.querySelectorAll(".home_right_bar a");
	let none=document.querySelectorAll(".none");
	let input=document.querySelector(".search > form > input:first-child");
	let search_hot_words=document.querySelector(".search_hot_words");
	let sub_menu=document.querySelectorAll(".flags");
	let header_nav=document.querySelectorAll(".header_nav > ul > li");
	let carousel_controls=document.querySelectorAll(".carousel_controls");
	
	for(let i=0;i<oA.length;i++){
		oA[i].onmouseover=function(){
			oA[i].style.color="#FFF";
		}
		oA[i].onmouseout=function(){
			oA[i].style.color="#B0B0B0";
		}

	}
	oTopbar_cart.onmouseover=function(){
		name.add("show_cart");
		oCart_menu.style="color:#424242;height:100px;box-shadow:0 4px 10px rgba(0,0,0,.15);padding:20px 0"
		// #424242
	}
	oTopbar_cart.onmouseout=function(){
		name.remove("show_cart");
		oCart_menu.style="height:0;box-shadow:none;padding:none;color:transparent";
		
	}
	for(let i=0;i<oHnav.length;i++){
		oHnav[i].onmouseover=function(){
			oHnav[i].style.color="#FF6700";
		}
		oHnav[i].onmouseout=function(){
			oHnav[i].style.color="#333";
		}
	}
	//显示隐藏banner_sub_nav
	for(let i=0;i<oBln.length;i++){
		
		oBln[i].onmouseover=function(){
			for(let j=0;j<oSub_nav.length;j++){
				oSub_nav[j].style.display="none";
			}
			oSub_nav[i].style.display="block";
			oBln[i].style.background="#FF6700"
			pre.style.display="none";
			next.style.display="none";
			btns.style.display="none";
		}
		oBln[i].onmouseout=function(){
			oSub_nav[i].style.display="none";
			oBln[i].style.background=""
			pre.style.display="block";
			next.style.display="block";
			btns.style.display="block";
		}
		
	}
	for(let i=0;i<oJ_brickNav.length;i++){
		
		oJ_brickNav[i].onmouseover=function(){
			for(let i=0;i<oJ_brickNav.length;i++){
				homeelec_content[i].style="z-index:-1";
				oJ_brickNav[i].style="";
			}
				
			oJ_brickNav[i].style="color:#FF6700;border-bottom: 2px solid #FF6700";
			homeelec_content[i].style="z-index:999";

		}
	}
	for(let i=0;i<span4_pic.length;i++){
		span4_pic[i].onmouseover=function(){
			span4_pic[i].style="box-shadow:0 15px 30px rgba(0,0,0,0.1);margin-top:-2px";
		}
		span4_pic[i].onmouseout=function(){
			span4_pic[i].style="";
		}
	}
	
	input.onfocus=function(){
		search_hot_words.style="display:none";
	}
	input.onblur=function(){
		search_hot_words.style="display:block";
	}
	for(let i=0;i<header_nav.length;i++){
		header_nav[i].onmouseover=function(){
			// sub_menu[i].style.display="block";
			sub_menu[i].style="height:230px;border-top: 1px solid #E0E0E0;box-shadow: 0 3px 4px rgba(0,0,0,0.18);";
		}
		header_nav[i].onmouseout=function(){
			// sub_menu[i].style.display="none";
			sub_menu[i].style="height:0;border-top:none;box-shadow:none;";
		}
	}
	let pics=document.querySelectorAll(".banner img.img");
	let dots=document.querySelectorAll(".btns > ul > li > a");
	let prebtn=document.querySelector(".pre");
	let nextbtn=document.querySelector(".next");
	let banner=document.querySelector(".banner");
	// 轮播点
	pics[0].style.opacity="1";
	dots[0].style.background="rgba(255,255,255,0.4)";
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<pics.length;j++){
				pics[j].style.opacity="0";
				dots[j].style.background="rgba(0,0,0,0.4)";
			}
			pics[i].style.opacity="1";
			dots[i].style.background="rgba(255,255,255,0.4)";
			num=i;
		}
	}
	let num=0;
	let t=setInterval(move,2000);
	function move(){
		num--;
		if(num==-1){
			num=4;
		}
		for(let j=0;j<pics.length;j++){
			pics[j].style.opacity="0";
			dots[j].style.background="rgba(0,0,0,0.4)";
		}
		pics[num].style.opacity="1";
		dots[num].style.background="rgba(255,255,255,0.4)";
	}
	function moveL(){
		num++;
		if(num==5){
			num=0;
		}
		for(let j=0;j<pics.length;j++){
			pics[j].style.opacity="0";
			dots[j].style.background="rgba(0,0,0,0.4)";
		}
		pics[num].style.opacity="1";
		dots[num].style.background="rgba(255,255,255,0.4)";
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
	prebtn.onclick=function(){
		moveL();
	}
	nextbtn.onclick=function(){
		move();
	}
	window.onfocus=function(){
		t=setInterval(move,2000);
	}
	window.onblur=function(){
		clearInterval(t);
	}
	
	// 内容部分
	let first_baby=document.querySelectorAll(".first_baby li");
	let second_baby=document.querySelectorAll(".second_baby li");
	let third_baby=document.querySelectorAll(".third_baby li");
	let four_baby=document.querySelectorAll(".four_baby li");

	let span=document.querySelectorAll(".first_btns");
	let span1=document.querySelectorAll(".second_btns");
	let span2=document.querySelectorAll(".third_btns");
	let span3=document.querySelectorAll(".four_btns");

	let moveWidth=document.querySelector(".content_list > li:first-child");
	let mWidth=parseInt(getComputedStyle(moveWidth,null).width);


	let banner_btnsl=document.querySelectorAll(".banner_btns")[0];
	let banner_btnsr=document.querySelectorAll(".banner_btns")[1];
	let banner_btnsl1=document.querySelectorAll(".banner_btns1")[0];
	let banner_btnsr1=document.querySelectorAll(".banner_btns1")[1];
	let banner_btnsl2=document.querySelectorAll(".banner_btns2")[0];
	let banner_btnsr2=document.querySelectorAll(".banner_btns2")[1];
	let banner_btnsl3=document.querySelectorAll(".banner_btns3")[0];
	let banner_btnsr3=document.querySelectorAll(".banner_btns3")[1];


	// 封装change
	function changetotal(first_baby,span,banner_btnsl,banner_btnsr){
		let now_baby=0;
		let next_bady=0;
		first_baby[0].style.left=0;
		span[0].style="border:2px solid #FF6700;backgroundColor:#FFF";
		function change(){
			next_bady++;
			if(next_bady==first_baby.length){
				next_bady=first_baby.length-1;
				return;
			}
			first_baby[now_baby].style.left=0;
			first_baby[next_bady].style.left=mWidth+"px";
			animate(first_baby[now_baby],{left:-mWidth},function(){
				span[now_baby].style.background="red";
			});
			animate(first_baby[next_bady],{left:0},function(){
				for(let j=0;j<first_baby.length;j++){
					span[j].style.border="2px solid #FFF";
					span[j].style.backgroundColor="#B0B0B0";
				}
				span[next_bady].style.border="2px solid #FF6700";
				span[next_bady].style.backgroundColor="#FFF";
				now_baby=next_bady;
			});
		}
			function change1(){
			next_bady--;
			if(next_bady==-1){
				next_bady=0;
				return;
			}
			first_baby[now_baby].style.left="0";
			first_baby[next_bady].style.left=-mWidth+"px";
			animate(first_baby[now_baby],{left:mWidth},function(){
				span[now_baby].style.background="red";
			});
			animate(first_baby[next_bady],{left:0},function(){
				for(let j=0;j<first_baby.length;j++){
					span[j].style.border="2px solid #FFF";
					span[j].style.backgroundColor="#B0B0B0";
				}
				span[next_bady].style.border="2px solid #FF6700";
				span[next_bady].style.backgroundColor="#FFF";
				now_baby=next_bady;
			});
			console.log(now_baby,next_bady);
		}
		banner_btnsr.onclick=function(){
			change();
		}
		banner_btnsl.onclick=function(){
			change1();
		}
	}

		

	// 调用1
	 changetotal(first_baby,span,banner_btnsl,banner_btnsr);
	 changetotal(second_baby,span1,banner_btnsl1,banner_btnsr1);
	 changetotal(third_baby,span2,banner_btnsl2,banner_btnsr2);
	 changetotal(four_baby,span3,banner_btnsl3,banner_btnsr3);

	// 秒杀
	let xmControls=document.querySelectorAll(".xm-controls > div");
	let oUl=document.querySelector(".big ul");
	let ulW=parseInt(getComputedStyle(oUl,null).width)/2;
	let num1=0;
	xmControls[0].onclick=function(){
		num1++;
		if(num1==2){
			xmControls[0].style.color="#E0E0E0";
			num1=1;
			return;
		}
		xmControls[1].style.color="#B0B0B0";
		oUl.style.transform="translateX("+(-ulW*num1)+"px)";
	}
	xmControls[1].onclick=function(){
		num1--;
		if(num1==-1){
			xmControls[1].style.color="#E0E0E0";
			num1=0;
			return;
		}
		xmControls[0].style.color="#B0B0B0";
		oUl.style.transform="translateX("+(-ulW*num1)+"px)";
	}
	// 为你推荐
	let commendControls=document.querySelectorAll(".commend-controls div");
	let commendList=document.querySelectorAll(".xm-carousel-col-5-list .transition");
	let conList=document.querySelector(".xm-carousel-col-5-list");
	let oConWidth=parseInt(getComputedStyle(conList,null).width);
	let num2=0;
	commendControls[0].onclick=function(){
		num2++;
		if(num2==2){
			num2=1;
			return;
		}
		commendList[1].style.color="#B0B0B0";
		conList.style.transform="translateX("+(-oConWidth*num2)+"px)";

	}
	for(let i=0;i<commendList.length;i++){
		commendList[i].onmouseover=function(){
			for(let j=0;j<commendList.length;j++){
				commendList[j].style.boxShadow="none";
			}
			commendList[i].style.boxShadow="0 15px 30px rgba(0,0,0,0.1)";
			commendList[i].style.transform="translateY(-5px)";
		}
	}

	// 返回顶部
	let bar_pop=document.querySelector(".bar_pop");
	bar_pop.onclick=function(){
		animate(document.body.scrollTop,{scrollTop:0});
		animate(document.documentElement.scrollTop,{scrollTop:0});
	}
	

	window.onscroll = function(){
		let bodyTop = document.body.srcollTop || document.documentElement.scrollTop;
		let slidebar = document.querySelector(".home_right_bar");
		if(bodyTop>=300){
			slidebar.style="top:70%;right:34px";
		}else {
			slidebar.style="top:90%;right:-34px"
		}
	}
} 