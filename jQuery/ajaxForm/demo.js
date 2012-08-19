//add resource: http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js

var Examples = {
    
    validateRegisterForm : function() {
      var email = $("input#email").val();  
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;            

      if(reg.test(email)==false) {
        var errorsDiv = $("#register-form .validation-errors");
        errorsDiv.append("<p class='error'>Adres email jest niepoprawny</p>");
        
        $('form#register-form label').addClass("error");
        $('form#register-form #email').addClass("error");
                  
        var errorParagraph = $("#register-form .validation-errors .error");
        errorParagraph.fadeOut(10000);                      
          
        return false;
      }
      
      //Remove error classes if present
      $('form#register-form label').removeClass("error");
      $('form#register-form #email').removeClass("error");
      
      //Universal submit blocker        
      $('form#register-form input[type=submit]').attr('disabled', 'disabled');
      
      this.sendRegisterRequest(email);
        
      return false;
    },
    sendRegisterRequest: function(email) {
       
        var data = {
          json: $.toJSON({
            html: '<p class="info">Konto użytkownika o adresie ' + email 
                + ' zostało pomyślnie zarejestrowane</p>'
          }),
         delay: 2
       };
       
       $.ajax({
          url:"/echo/json/",
          data:data,
          type:"POST"
       }).done(function(response){
          $('form#register-form').get(0).reset();
           
          $("#statusMessages").append(response.html);
          $('#statusMessages .info').fadeOut(10000); 
           
          $('form#register-form input[type=submit]').attr('disabled', '');
           
       }).fail(function(jqXHR, textStatus){
          alert('Błąd połączenia: ' + textStatus);
       });  
   }
};

   
//Event handlers

$(document).ready(function() { 
  $('#register-form').submit(function() {
    return Examples.validateRegisterForm();
  });
});
​
