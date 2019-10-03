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


// $(function(){
//   $(".edit_id").on("click",function(){
//     $(".before-form").fadeOut('fast');
//     $('.blog-form').fadeIn('slow');
//   });

// });