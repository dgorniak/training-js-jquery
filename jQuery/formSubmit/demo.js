$(document).ready(function() { 
  $('#register-form').submit(function() {
      var email = $("input", this).val();
      alert("Formularz rejestracji został zgłoszony, adres email: " + email);
      return false;
  });
});

var Examples = {
}
