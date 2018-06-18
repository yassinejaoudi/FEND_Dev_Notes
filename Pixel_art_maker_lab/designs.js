// Select size input
let heightValue = $('#inputHeight').val();
let widthValue = $('#inputWidth').val();

// When size is submitted by the user, call makeGrid()
const submitedValue = $('#submitChoice');
submitedValue.on('click', (event) => {
  	event.preventDefault();
	makeGrid();
});

function makeGrid(event) {
    const canvas = $('#pixelCanvas');
    canvas.empty();
  	for (var row = 0; row < widthValue; row++){
      	canvas.append('<tr></tr>');
    }for(var column = 0; column < heightValue; column++){
      	$('tr').append('<td></td>');
    }
    // Set Color
    $('#colorPicker').on('change', function(){
        colorInput = $('#colorPicker').val();
        $(input).css('border-color', colorInput);
    });

    //Mouse Click
    canvas.on('click', 'td', function(event){
        event.preventDefault();
        $(this).css('background-color', colorInput);
    });
  
	//Mouse down
  	canvas.on('mousedown', function(){
      mouseDown = true;
    });
  
  	//Mouse Up
  	canvas.on('mouseup', function(){
      mouseUp =false;
    });
  	
  	//Mouse Moving
  	canvas.on('mousemove', 'td', function(event){
      event.preventDefault();
      if (mouseDown){
        $(this).css('background-color', colorInput);
      }
    });
}
	