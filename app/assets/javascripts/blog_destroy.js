$(function() {
  $(document).on("click", ".delete_id", function (e) {
    e.preventDefault();
    var deleteMessage = confirm('削除してよろしいでしょうか？');
    if(deleteMessage == true) {
      var blog_element = $(this).parents('.content');
      var blog_id = blog_element.attr("data-blog-id");
      var url = location.href + "/" + blog_id;
    $.ajax({
      url: url,
      type: "POST",
      data: {'id': blog_id,
      '_method': 'DELETE'} ,
      dataType: 'json'
    })
    .done(function(data) {
      blog_element.remove();
    })

    .fail(function() {
      alert('blog destroy error');
    })
  }
  });
}); 
