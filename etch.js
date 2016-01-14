$(document).ready(function() {
	var staging = function() {
		var size = prompt("What should be the size of an area's side?");
		var dimension = (($('.container').width())-1)/size;
		var dimensionA = dimension+'px';
		console.log(dimensionA);
		for (var counter = 1; counter < (size*size+1); counter++) {
			$('.container').append('<div></div>');
		}
		$( 'div div').addClass('square');
		$('.square').css({
			"width":dimensionA,
			"height":dimensionA
		});
		$('.square').on('mouseenter', function() {
			$(this).removeClass('square');
			$(this).addClass('squareA');
		});
	};
	staging();
	$('button').on('click',function() {
		$('.squareA').removeClass('squareA');
		staging();
	});	
});

