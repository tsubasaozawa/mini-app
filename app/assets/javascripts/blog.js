$(function(){
  function buildHTML(blog){
    var html =`<div class="content" data-blog-id="${blog.id}">
                <div class="content__messages">
                <div class="content__message">
                <div class="content__message__box" data-edit-id="${blog.id}"><p class="lower-message__content">${blog.content}</p></div>
                <div class="content__message__info"><p class="message__upper-info__talker">ユーザ：${blog.name}</p><p class="message__upper-info__date">投稿日時：${blog.created_at}</p></div>
                <div class="content__message__edit-and-delete-btn"><p class="edit_id">Edit</p><p class="delete_id">Delete</p></div></div></div>
                <div class="pict"><img class="pict__img" src="${blog.image}" alt="Image"></div></div>`

    return html;
  }

  $("#new_blog").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "post",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".contents").append(html);
      $("form")[0].reset(); // $("form")のformはクラス名ではなく、送信フォーム自体をさしているため「.」は不要
      $('.contents').animate({scrollTop: $('.contents')[0].scrollHeight}),'fast';
    })
    .fail(function(data){
      alert("エラー");
    })
    .always(function(data){
      $('.input-box__submit').prop('disabled', false);　
    })
  });
});