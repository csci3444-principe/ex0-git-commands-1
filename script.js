// Code goes here
(function() {
  var name = 'ilker';
  alert("Hello Dr. " + name)

  function myFunction2() {
    document.getElementById("1234").innerHTML = "new Content";
  }

})()

function myFunction1() {
  document.getElementById("1234").innerHTML = "new Content";
}

// jQuery example1 - set a function with document ready event of jQuery 
$(document).ready(function() {
  var name = 'kiris';
  alert("Merhaba Doc. " + name);
});

// jQuery example2 - set a function with document ready event of jQuery, using $ alias to $(document).ready
$(function(){
  var name = 'ilker kiris';
  alert("Merhaba Doc. " + name);
});

