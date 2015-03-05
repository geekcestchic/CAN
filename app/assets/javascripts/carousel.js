function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  });
}

function getSlideShow(){
  //create an array of images from the 'images' folder
  var images = []
  request('GET','/projects', null).done(function(projects){
    $.each(projects, function(index,project){
      images.push(project.image.url);
    });
    addToNav(images);
  });
}

function addToNav(images){
  $('<div class="slideshow-nav"></div>').insertAfter('.slideshow-container');

 //loop through the images and add to the empty container on the page
  $.each(images, function(index, value){
    $('<img src="' + value + '">').appendTo('.slideshow-images');
    $('<a href="#"></a>').appendTo('.slideshow-nav');
  });

  //fade the images in
  $('.slideshow-images img').animate({opacity: 1}, 3000);

  //watch for clicks on the slideshow nav
  var imageWidth = $('.slideshow-container').width();
  $('.slideshow-nav a').on('click', function(){
    var index = $(this).index();
    $('.slideshow-images').animate({
      'margin-left': -index * imageWidth
    }, 750);
    $("currentSlide").wrap("<a href='/projects/new'></a>");
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });

  //auto advance the slideshow
  var currentSlide = 0;
  setInterval(function(){
    //trigger a click on the first nav item
    //trigger a click on the next nav item
    //trigger a click on the last nav item
    //trigger a click on the first nav item
    if (currentSlide >= images.length){
      currentSlide = 0;
    }
    $('.slideshow-nav a').eq(currentSlide++).trigger('click')
  }, 3000)
}

$(function(){ 
  getSlideShow();
});


  // var imagePath = '/assets/';
  // var images = ['fish.jpg', 'elephant.jpg', 'giraffe.jpg', 'penguins.jpg'];

  // create the .slideshow-nav container
  // could also do $(element1).after(element2) --> reversed





