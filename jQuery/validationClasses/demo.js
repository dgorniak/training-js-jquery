var Examples = {
    
    validateRegisterForm : function() {
      var email = $("input#email").val();  
      if(email.length === 0 || (email.indexOf("@") < 0)) {
        var errorsDiv = $("#register-form .validation-errors");
        errorsDiv.append("<p class='error'>Adres email jest niepoprawny</p>");
        
        $('form#register-form label').addClass("error");
        $('form#register-form #email').addClass("error");
                  
        var errorParagraph = $("#register-form .validation-errors .error");
        errorParagraph.fadeOut(10000);                      
          
        return false;
      }
      
      //$('form#register-form label').removeClass("error");
      //$('form#register-form #email').removeClass("error");
      
        
    }
};

$(document).ready(function() { 
  $('#register-form').submit(function() {
    return Examples.validateRegisterForm();
  });
});
