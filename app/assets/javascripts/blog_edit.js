$(function() {
  var InlineEdit;
  var values = {
    id: "",
    content: "",
  }

  function reBuild(blog) {
    var html = `<div class="content__message__box"><p class="lower-message__content">${ blog.content }</p></div>` // 改行するとinputに余白が入るため注意
                
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
    InlineEdit = $(this).parent().siblings(".content__message__box"); // this（.edit_id）親の兄弟であるcontent__message__boxクラスを取得
    values = {
      id: InlineEdit.attr("data-edit-id"),
      content: InlineEdit.find('.lower-message__content').text(),
    }
      var input_element = '<input class="content__message__InlineEdit-input" type="text" value="'+values.content+'">';  // メッセージを入れたまま（'+values.content+'）inputボックス立ち上げ
      var button_element = '<ul class="content__message__InlineEdit-buttons"><li class="content__message__InlineEdit-cancel"><i class="fa  fa-times"></i></li><li class="content__message__InlineEdit-save"><i class="fa fa-check-circle"></i></li></ul>';  // 編集内容のキャンセル、編集内容の保存ボタンの立ち上げ
      InlineEdit.addClass('InlineEdit-active').empty().append(input_element).append(button_element).find('input').focus();
  });
});