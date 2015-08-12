var canvasSize=700;
var initialGrid=16;
var borderPixels=initialGrid;
var cellDimension =(canvasSize-initialGrid)/initialGrid;


$(document).ready(function(){

	createGrid();

	$('.cell').mouseenter(function() {
		$(this).addClass("fill-solid");
	});

});

function createGrid () {

	//$(".wrapper").css("width",16*26)
	console.log(cellDimension)
	for (var i = 0; i < initialGrid; i++) {
		for (var j = 0; j < initialGrid; j++){
			$('.wrapper').append('<div class="cell"></div>');
		};
		//$('.wrapper').append('<div class="clear"></div>');
	};

	$('.cell').css("width",cellDimension);
	$('.cell').css("height",cellDimension);
}


