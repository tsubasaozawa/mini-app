$(function(){
  $(".before-form").on("click",function(){
    $(".before-form").fadeOut('fast');
    $('.blog-form').fadeIn('slow');
  });
});

$(function(){
  $(".close__btn").on("click",function(){
    $(".blog-form").fadeOut('fast');
    $('.before-form').fadeIn('slow');
  });
});

$(function(){
  $(".input-box__submit").on("click",function(){
    $(".blog-form").fadeOut('fast');
    $('.before-form').fadeIn('slow');
  });
});

$(function(){
  $(".top-menu1").on("click",function(){
    $('.main-menu').animate({ width: 'toggle'}, 'fast' );
  });
});