var Examples = {
    
    validateRegisterForm : function() {
      var email = $("input#email").val();  
      if(email.length === 0 || (email.indexOf("@") < 0)) {
        alert('Formularz zawiera błędy.');
        return false;
      }
    }
};

$(document).ready(function() { 
  $('#register-form').submit(function() {
    return Examples.validateRegisterForm();
  });
});

​
