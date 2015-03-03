function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function fillStar(element){
  element.addClass('hover');
}

function fillStars(){
  var id = $(this).context.id;
  $(this).addClass('hover');
// not very dry, can refactor using the data if have time
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
  var id = $(this).context.id;
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
  var id = $(this).context.id;
  var projectId = $('#comment-box').data('project-id');
  var rating = $(this).context.dataset.rating;

  request("POST", "/projects/" + projectId + "/ratings", 
    { rating: { 
      value: rating, project_id: projectId
    }
  })
  .done(function(data){
    $('.notify').append('<p>Rating received!</p>');
    $('.rating-box').html('');
  });

}

function getAverage(){
 
}

$(document).ready(function(){
  console.log('rating.js loaded')
  $('.star').hover(fillStars, unfillStars)
  $('.star').on('click',submitRating)
  getAverage()
});