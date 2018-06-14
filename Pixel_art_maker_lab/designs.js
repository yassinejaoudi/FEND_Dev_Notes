$('#submitChoice').on('click', function(event){
  event.preventDefault();
  makeGrid();
});

function makeGrid(){
  const table = $('#pixelCanvas');
  table.empty();
  let height = $('#inputHeight').val();
  let width = $('#inputWidth').val();
  
  
  for(var row=0; row < width; row++){
        table.append('<tr></tr');
    }
    for(var column=0; column < height; column++){
        $('tr').append('<td></td>');
    }
  
    // Set Color
    $('#colorPicker').on('change', function(){
        color = $('#colorPicker').val();
        $(input).css('border-color', color);
    });

    //Mouse Click
    $(table).on('click', 'td', function(evt){
        evt.preventDefault();
        $(this).css('background-color', color);
    });

    // Mouse Down
    $(table).on('mousedown', function(){
        mouseDown = true;
    });

    // Mouse Up
    $(table).on('mouseup', function(){
        mouseDown = false;
    });

    // Clicked Mouse Moving
    $(table).on('mousemove', 'td', function(evt){
        evt.preventDefault();
        if (mouseDown){
            $(this).css('background-color', color);
        }
    })
}
