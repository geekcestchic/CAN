$(function(){
  console.log('loaded lightbulb.js')
  var rating = $('.average-rating')[0].dataset.rating;
  if (rating > 3){
      $('.image').css('box-shadow', '0px 0px 5px yellow')
      $('.image').css('background', 'yellow')
      $('.image').css('border-radius', '40px')
      // $('.brilliance').text('<p>BRILLIANT IDEA!</p>')
  }
});