function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function prependToPage(comment){
  $('<li><p>' + comment.content+'</p><p>Comment by' + comment.user_id + '</p></li>').prependTo("#comments")
}

function getComments() {
  request("GET", "/comments", null)
  .done(function(data){
    console.log(data)
    $.each(data, function(index,comment){
      prependToPage(comment)
    });
  });
}

function createComment(){
  console.log('you have commented!')
  request("POST", "/comments", {comment:{content: $('#comment-box').val()}}).done(function(data){
    prependToPage(data)
    console.log('Your comment will appear here')
  });
  $('#comment-box').val("")
}

$(function(){
  console.log('Comments.js loaded')
  getComments()
  $('#comment-box').on('keypress', function(e){
    if (e.which === 13) createComment()
  });

});