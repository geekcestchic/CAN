
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
  rating = 0
  console.log('submit rating of '+id)
}

$(document).ready(function(){
  console.log('rating.js loaded')
  //define hover
  $('.star').hover(fillStars, unfillStars)
  //define click to submit rating
  $('.star').on('click',submitRating)
});