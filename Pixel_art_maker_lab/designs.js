// Select color input
let colorInput = document.querySelector('#colorPicker').value;

// Select size input
let heightValue = document.querySelector('#inputHeight').value;
let widthValue = document.querySelector('#inputWidth').value;

// When size is submitted by the user, call makeGrid()
const submitedValue = document.querySelector('#choiceSubmit');
submitedValue.addEventListener('submit', (event) => {
	makeGrid(event);
});

function makeGrid(event) {
  	for (var row = 0; row < widthValue; row++){
      	$('#pixelCanvas').append('<tr></tr>');
    }for(var column = 0; column < heightValue; column++){
      	$('tr').append('<td></td>');
    }
}
