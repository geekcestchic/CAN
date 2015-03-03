function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function fillStars(){
  var id = $(this).context.id
  $(this).addClass('hover');

  if (id === 'five'){
    $('#four').addClass('hover');
    $('#three').addClass('hover');
    $('#two').addClass('hover');
    $('#one').addClass('hover');
  }
  else if (id === 'four'){
    $('#three').addClass('hover');
    $('#two').addClass('hover');
    $('#one').addClass('hover');
  }
  else if (id === 'three'){
    $('#two').addClass('hover');
    $('#one').addClass('hover');
  }
  else if (id === 'two'){
    $('#one').addClass('hover');
  }
}

function unfillStars(){
  var id = $(this).context.id
  $(this).removeClass('hover');

  if (id === 'five'){
    $('#four').removeClass('hover');
    $('#three').removeClass('hover');
    $('#two').removeClass('hover');
    $('#one').removeClass('hover');
  }
  else if (id === 'four'){
    $('#three').removeClass('hover');
    $('#two').removeClass('hover');
    $('#one').removeClass('hover');
  }
  else if (id === 'three'){
    $('#two').removeClass('hover');
    $('#one').removeClass('hover');
  }
  else if (id === 'two'){
    $('#one').removeClass('hover');
  }
}

function submitRating(){
  var id = $(this).context.id
  console.log('submit rating of ' + id)
  if (id === 'five'){
    request("POST", 
      "/projects/" + $('#comment-box').data('project-id') + "/ratings", 
      {rating:{value: 5, project_id: $('#comment-box').data('project-id')}})
    .done(function(data){
      console.log('Thanks! You have just rated this idea ' + data + ' stars.')
      // $('.notice').prepend('Thanks! You have just rated this idea ' + data + ' stars.')
    });
  }
}

function getAverage(){

}

$(document).ready(function(){
  console.log('rating.js loaded')
  $('.star').hover(fillStars, unfillStars)
  $('.star').on('click',submitRating)
  getAverage()
});