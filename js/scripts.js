

  

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