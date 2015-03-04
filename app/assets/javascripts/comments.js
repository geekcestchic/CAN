 function request(method, url, data){
    return $.ajax({
      url: url,
      method: method,
      dataType: "json",
      data: data
    })
  }

  function prependToPage(comment){
    // console.log('does this even work')
    $('<li>'
      +'<p>' + comment.content+'</p>'
      +'<p class="small">Comment by: ' + comment.user+ ' @'+comment.created_at + '</p>'
      +'</li>')
    .prependTo("#comments")
  }

  function getComments() {
    var projectId = $('#comment-box').data('project-id');
    request("GET", "/projects/" + projectId + "/comments", null)
    .done(function(data){
      // console.log(data)
      $.each(data, function(index,comment){
        if (comment.project_id === projectId) {
          prependToPage(comment)
        }
      });
    });
  }

  function createComment(){
    
    var projectId = $('#comment-box').data('project-id');

    console.log('you have commented!')
    request("POST", "/projects/" + projectId + "/comments", {comment:{content: $('#comment-box').val()}}).done(function(data){
      prependToPage(data)
      console.log('Your comment will appear here')
    });
    $('#comment-box').val("")
  }

$(document).ready(function(){
  console.log('Comments.js loaded');
  getComments();
  $('#comment-box').on('keypress', function(e){
    if (e.which === 13) createComment()
  });
});