//add resource: http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js
  var data = {
        json: $.toJSON({
            text: '<p>Odpowiedź z serwera</p>'
        }),
        delay: 2
  }
    

  $.ajax({
      url:"/echo/json/",
    data:data,
    type:"POST"
  }).done(function(response){
       $("#textContainer").append(response.text);
  }).fail(function(jqXHR, textStatus){
       alert('Błąd połączenia: ' + textStatus);
  });

​
