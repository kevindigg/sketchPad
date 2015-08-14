var canvasSize=700;


$(document).ready(function(){
	gridSize=16;

	createGrid(gridSize);

	$('#clearBtn').click(function() {
		gridSize = prompt ("Enter number of squares per side","16");
		clearGrid(gridSize);
	});

	$('#color-fill').click(function(){
		clearGrid(gridSize);
		drawmode = "color"
	});

	$('#airbrush').click(function(){
		clearGrid(gridSize);
		$('div.cell').addClass("airbrush");
		drawmode = "airbrush"
	});
});


function createGrid(gSize) {

	drawmode = "fill";

	var cellDimension =(canvasSize - 0)/gSize;
	var totalCells=gSize*gSize;
	
	for (var j = 0; j < totalCells; j++){
		$('.wrapper').append('<div class="cell"></div>');
	};

	$('.cell').width(cellDimension).height(cellDimension);

	$('.cell').mouseenter(function() {
		fillSquare($(this));
	});
}

function fillSquare(caller) {
	switch(drawmode) {
		case "fill":
			caller.addClass("fill-solid");
			break;
		case "color":
			caller.css("background-color",randColor());
			break;
		case "airbrush":
			currentOpacity = Number(caller.css("opacity"));
			if(currentOpacity < 1) {
				caller.css("opacity",currentOpacity + 0.1);
			}
			break;

	}
}

function randColor(){
	r=Math.floor(Math.random()*255);
	g=Math.floor(Math.random()*255);
	b=Math.floor(Math.random()*255);
	return "rgb("+r+","+g+","+b+")";
}

function clearGrid(newGrid) {
	$('.cell').remove();
	createGrid(newGrid);
}
