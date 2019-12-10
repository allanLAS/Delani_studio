$(document).ready(function(){
  $("#designImage").click(function() {
    $("#designImage").hide();
    $("#designP").toggle();
    $("#designP").show();
  });
  $("#designP").click(function(){
    $("#designP").hide();
    $("#designImage").toggle();
    $("#designImage").show();
  });
});
$(document).ready(function(){
  $("#devImage").click(function() {
    $("#devImage").hide();
    $("#devP").toggle();
    $("#devP").show();
  });
  $("#devP").click(function(){
    $("#devP").hide();
    $("#devImage").toggle();
    $("#devImage").show();
  });
});
$(document).ready(function(){
  $("#prodImage").click(function() {
    $("#prodImage").hide();
    $("#prodP").toggle();
    $("#prodP").show();
  });
  $("#prodP").click(function(){
    $("#prodP").hide();
    $("#prodImage").toggle();
    $("#prodImage").show();
  });
});