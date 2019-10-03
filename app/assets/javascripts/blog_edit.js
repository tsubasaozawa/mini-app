$(function() {
  var InlineEdit;
  var values = {
    id: "",
    name: "",
    created_at: "",
    content: "",
  }

  function reBuild(blog) {
    var html = `<div class="content__message__box">
                  <p class="lower-message__content">
                    ${ blog.content }
                  </p>
                </div>
                <div class="message__upper-info">
                  <p class="message__upper-info__talker">
                    ユーザ：${ blog.name }
                  </p>
                  <p class="message__upper-info__date">
                    投稿日時：${ blog.created_at}
                  </p>
                </div>`

  InlineEdit.removeClass('InlineEdit-active').empty().append(html);
  }

  $(document).on("click", ".content__message__InlineEdit-cancel", function () {
    reBuild(values);  
  });

  $(document).on("click", ".content__message__InlineEdit-save", function () {

    var url = location.href + "/" + values.id;
    var input = InlineEdit.find('input').val();

      $.ajax({
        url: url,
        type: "POST",
        data: {'id': values.id,
        'content': input,
        '_method': 'PATCH'} ,
        dataType: 'json'
      })
      .done(function(data) {
        reBuild(data);
      })

      .fail(function() {
        alert('message edit error');
      })
  });

  $(document).on("click", ".edit_id", function () {
    InlineEdit = $(this).parents('.content__message');
    values = {
      id: InlineEdit.attr("data-id"),
      name: InlineEdit.find('.message__upper-info__talker').text(),
      created_at: InlineEdit.find('.message__upper-info__date').text(),
      content: InlineEdit.find('.lower-message__content').text(),
    }
      var input_element = '<input class="content__message__InlineEdit-input" type="text" value="'+values.content+'">';
      var button_element = '<ul class="content__message__InlineEdit-buttons"><li class="content__message__InlineEdit-cancel"><i class="fa  fa-times"></i></li><li class="content__message__InlineEdit-save"><i class="fa fa-check-circle"></i></li></ul>';
      InlineEdit.addClass('InlineEdit-active').empty().append(input_element).append(button_element).find('input').focus();
      debugger;
  });
});