$(document).ready(function(){
	
	var c=2;
	
	$('#show2').css('display', 'none');
	$('#show3').css('display', 'none');
	$('#show4').css('display', 'none');
	
	$('#show1button').click(function(){
		$('#show1').css('display', 'none');
		$('#show2').css('display', 'block');
		$('.mapImage').attr('src', '../images/rosary/m1/rosary-m1m1.jpg');
		
	});
	
	$('#show2button').click(function(){
		
		 if (c <= 10){
			$('.counter').html("<h3>"+c+"</h3>");
			$('.mapImage').attr('src', '../images/rosary/m1/rosary-m1m'+c+'.jpg');
			 c++;
		 }
		 else{
			 
			$('#show2').css('display', 'none');
			$('#show3').css('display', 'block');
			$('.mapImage').attr('src', '../images/rosary/m1/rosary-father1.jpg');
		
		 }
		
	});
	
	$('#show3button').click(function(){
		$('#show3').css('display', 'none');
		$('#show4').css('display', 'block');
		
	});

});