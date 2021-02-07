// JavaScript Document
$(document).ready(function(){
	
	var upDown = 0;
	
	$('.global_nav').slideUp(0);
	
	$("#global_arrow").click(function(){
		
		if (upDown == 0){
			$("#global_arrow").removeClass('fa-angle-down').addClass('fa-angle-up');
			$('.global_nav').slideDown('slow');
			upDown = 1;
		}
		else if (upDown == 1){
			$("#global_arrow").removeClass('fa-angle-up').addClass('fa-angle-down');
			$('.global_nav').slideUp('slow');
			upDown = 0;
		}
	});
	
	
	
});