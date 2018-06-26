// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	  console.log("makeGrid is running!")
	
	// Select size input
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWeight').val();
	
	canvas.children().remove()
	
	for (m = 0; m < gridHeight; m++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (n = 0; n < gridWidth; n++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
		cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

