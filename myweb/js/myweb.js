var index=0;
var time=setInterval(move,3000);
function move() {
	index++;
	if (index==4){
		index=0;
	}
	$(".w_circle a").eq(index).addClass("c_current");
	$(".w_circle a").eq(index-1).removeClass("c_current");
	$(".w_img li").eq(index).stop().fadeIn(1000);
	$(".w_img li").eq(index).siblings().stop().fadeOut(1000);
};
function movel() {
	index--;
	if (index==-1){
		index=3;
	}
	$(".w_circle a").eq(index).addClass("c_current");
	$(".w_circle a").eq((index+1)%4).removeClass("c_current");
	$(".w_img li").eq(index).stop().fadeIn(1000);
	$(".w_img li").eq(index).siblings().stop().fadeOut(1000);
};
$(document).ready(function(){
	$("#wrap").hover(function(){
		$(".btn").css("opacity","0.5");
		clearInterval(time);
		},function(){
			$(".btn").css("opacity","0.2");
			time=setInterval(move,3000);
	});
	$(".left_btn").click(function(){
		movel();
	});
	$(".right_btn").click(function(){
		move();
	});
	$(".w_circle a").click(function(){
		var i=$(".w_circle a").index($(this));
		$(".w_circle a").removeClass("c_current");
		$(".w_circle a").eq(i).addClass("c_current");
		$(".w_img li").eq(i).stop().fadeIn(1000);
		$(".w_img li").eq(i).siblings().stop().fadeOut(1000);
		
	});
});