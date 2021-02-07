// JavaScript Document
$(document).ready(function(){


	function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

// Usage:

preload([
    'url(../images/signOfCross2.jpg)',
    'url(../images/signOfCross3.jpg)',
    'url(../images/signOfCross4.jpg)',
]);

	var i = 1;

	setInterval (function(){
		if (i == 1){
			$('#signOfTheCrossBackground').css('background-image', 'url(../images/signOfCross'+i+'.jpg)');
			i++;
		}
		else if (i == 2){
			$('#signOfTheCrossBackground').css('background-image', 'url(../images/signOfCross'+i+'.jpg)');
			i++;
		}
		else if (i == 3){
			$('#signOfTheCrossBackground').css('background-image', 'url(../images/signOfCross'+i+'.jpg)');
			i++;
		}
		else if (i == 4){
			$('#signOfTheCrossBackground').css('background-image', 'url(../images/signOfCross'+i+'.jpg)');
			i=1;
		}

	}, 800);


	 });
