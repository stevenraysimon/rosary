// JavaScript Document
$(document).ready(function(){
	
	var slideLeft = 0;
	var slideTime = 500;
	var menuSlider = 4000;
	
	
	$(".clickGlobalMenu").click(function(){
		
		if (slideLeft == 0){
			$('.global_nav').animate({
				left: "+=220",
			 }, slideTime);
			 $('.blackBackground').fadeIn('fast');
			slideLeft = 1;
		}
		else if (slideLeft == 1){
			$('.global_nav').animate({
				left: "-=220",
			 }, slideTime);
			 $('.blackBackground').fadeOut('fast');
			slideLeft = 0;
		}
	});
	
	$(".hideMenu").click(function(){
		
			$('.global_nav').animate({
				left: "-=220",
			 }, slideTime);
			 $('.blackBackground').fadeOut('fast');
			slideLeft = 0;
	});
	
	var i = 1;

	setInterval (function(){ 
	
	if (i == 1){
		$('.technologyBox').css('background-image', 'url(images/technology'+i+'.jpg)');
		i++;
	}
	else if (i == 2){
		$('.technologyBox').css('background-image', 'url(images/technology'+i+'.jpg)');
		i--;
	}

	}, menuSlider);
	
	
});