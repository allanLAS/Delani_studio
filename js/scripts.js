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

  

$(document).ready(function(){
  $(".design").click(function(){
    $(".show").toggle();
    $(".click").toggle();
  });

    $(".development").click(function(){
      $(".show1").toggle();
      $(".click1").toggle();
    });

    

  $(".product").click(function(){
    $(".show2").toggle();
    $(".click2").toggle();
  });


  $(".project").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  });
  

});