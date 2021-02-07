function mysteryChanger(m){

	//1 is already in the html, so it will change to 2 next
	var c=0;
	var beginBack = false;

	var imgMystery = m-1;

	$('#show2').css('display', 'none');
	$('#show3').css('display', 'none');
	$('#show4').css('display', 'none');

	//Our Father displays on load, now go to Hail Marys
	$('#show1button').click(function(){
		c = 1;
		console.log("Forward Hail Mary: "+c);
		$('.counter').html("<h3>"+c+"</h3>");
		$('#show1').css('display', 'none');
		$('#show2').css('display', 'block');
		$('.mapImage').attr('src', '../images/rosary/m'+m+'/rosary-m'+m+'m'+c+'.jpg');

		scrollInstead();
	});

	//Clicking forward through the Hail Marys
	$('#show2button').click(function(){
		 if (c < 10){
			c++;
			$('.counter').html("<h3>"+c+"</h3>");
			$('.mapImage').attr('src', '../images/rosary/m'+m+'/rosary-m'+m+'m'+c+'.jpg');
			console.log("Forward Hail Mary: "+c);
			scrollInstead();
		 }
		 else if (c == 10){
			$('#show2').css('display', 'none');
			$('#show3').css('display', 'block');
			$('.mapImage').attr('src', '../images/rosary/m'+m+'/rosary-father'+m+'.jpg');
			c = 10;
			scrollInstead();
		 }
	});

	//Clicking backward through the Hail Marys
	$('#back2button').click(function(){
				 if (c > 1){
					c--;
					$('.counter').html("<h3>"+c+"</h3>");
					$('.mapImage').attr('src', '../images/rosary/m'+m+'/rosary-m'+m+'m'+c+'.jpg');
					console.log("Backward Hail Mary: "+c);
					scrollInstead();
				 }
				 else if (c == 1){
					$('#show2').css('display', 'none');
					$('#show1').css('display', 'block');
					if (m == 1){
						$('.mapImage').attr('src', '../images/rosary/rosary-start.jpg');
					} else{
						$('.mapImage').attr('src', '../images/rosary/m'+imgMystery+'/rosary-father'+imgMystery+'.jpg');
					}
					c = 0;
					scrollInstead();
				}
	 // }
	});

	$('#show3button').click(function(){
		console.log("Forward Glory Be: "+c);
		$('#show3').css('display', 'none');
		$('#show4').css('display', 'block');
		scrollInstead();
	});

	$('#back3button').click(function(){
		console.log("Backward Glory Be: "+c);
		$('#show3').css('display', 'none');
		$('#show2').css('display', 'block');
		$('.mapImage').attr('src', '../images/rosary/m'+m+'/rosary-m'+m+'m'+c+'.jpg');
		scrollInstead();
	});

	$('#back4button').click(function(){
		console.log("Backward Fatima Prayer: "+c);
		$('#show4').css('display', 'none');
		$('#show3').css('display', 'block');
		scrollInstead();
	});


}//mysteryChanger


function scrollInstead(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
}
