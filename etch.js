$(document).ready(function() {
	
	var size = prompt("What should be the size of an area's side?");
	var dimension = ($('.container').width())/size;
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
	$('button').live('click',function() {
		
	});
	
});

