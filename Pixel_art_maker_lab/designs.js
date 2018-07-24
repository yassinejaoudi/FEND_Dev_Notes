// Select size input
let colorInput = 'rgba(0,0,0)';

// When size is submitted by the user, call makeGrid()
const submitedValue = $('#choiceSubmit');
submitedValue.on('click', (event) => {
  	event.preventDefault();
	makeGrid();
});

function makeGrid(event) {
  	let heightValue = $('#inputHeight').val();
  	let widthValue = $('#inputWidth').val();
  	const canvas = $('#pixelCanvas');
	canvas.empty();
  	let id = 0;
  	for (var row = 0; row < widthValue; row++){
      	canvas.append('<tr id='+id+'></tr>');
    for(var column = 0; column < heightValue; column++){
      	$('#'+id).append('<td></td>');}
      id++;
    }
    // Set Color
    $('#colorPicker').on('change', function(){
        colorInput = $('#colorPicker').val();
    });

    //Mouse Click
    canvas.on('click','td', function(event){
        event.preventDefault();
        $(this).css('background-color', colorInput);
  });
}
	
