var element = $('p#text');

$(document).ready(function(){
  element.mouseover(function() {
      element.removeClass('small').addClass('big');
  });
  
  element.mouseout(function() {
      element.removeClass('big').addClass('small');
  });
});
​
