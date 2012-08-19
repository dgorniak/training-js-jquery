//add resource: http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css

$(document).ready(function() {
  
  $('#modal').dialog({ autoOpen: false,
                       modal: true});

    
  $('#modalCheckbox').click(function() {
      $('#modal').dialog('open');
  });
});


