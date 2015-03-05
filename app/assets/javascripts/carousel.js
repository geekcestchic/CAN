function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  });
}

// function getSlideShow(){
//   //create an array of images from the 'images' folder
//   var images = []
//   request('GET','/projects', null).done(function(projects){
//     $.each(projects, function(index,project){
//       images.push(project.image.url);
//     });
//     images = images.filter(Boolean)
//     addToNav(images);
//   });
// }

function getSlideShow(){
  //create an array of images from the 'images' folder
  var images = []
  var titles = []
  var ids = []
  request('GET','/projects', null).done(function(projects){
    $.each(projects, function(index,project){
      images.push(project.image.url);
      titles.push(project.title);
      ids.push(project.id);
    });
    images = images.filter(Boolean)
    addToNav(images, titles, ids);
  });
}



function addToNav(images,titles,ids){
  $('<div class="slideshow-nav"></div>').insertAfter('.slideshow-container');

 //loop through the images and add to the empty container on the page
  $.each(images, function(index, value){
    $('<img src="' + value + '">').appendTo('.slideshow-images');
    $('<a href="#"></a>').appendTo('.slideshow-nav');
  });
  $.each(titles, function(index, value){
    console.log(value)
    $('<li>'+value+'</li>').appendTo('.project-links');
  });
  // $.each(ids, function(index, value){
  //   $('<img src="' + value + '">').appendTo('.slideshow-images');
  //   $('<a href="#"></a>').appendTo('.slideshow-nav');
  // });

  

  //fade the images in
  $('.slideshow-images img').animate({opacity: 1}, 3000);


  //watch for clicks on the slideshow nav
  var imageWidth = $('.slideshow-container').width();
  $('.slideshow-nav a').on('click', function(){
    var index = $(this).index();
    $('.slideshow-images').animate({'margin-left': -index * imageWidth}, 750);
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });

  $('.project-links li').on('click', function(){
    var index = $(this).index();
    $("currentLink").wrap("<a href='/projects/new'></a>");
    $(this).addClass('is-active').siblings().removeClass('is-active');
  });

  //auto advance the slideshow
  var currentSlide = 0;
  var currentLink = 0
  setInterval(function(){
    if (currentSlide >= images.length){
      currentSlide = 0;
      currentLink = 0;
    }
    $('.slideshow-nav a').eq(currentSlide++).trigger('click')
    // $('.project-links li').eq(currentLink++).toggleClass('is-active')
    $('.project-links li').eq(currentLink++).trigger('click')
  }, 3000)
}

$(function(){ 
  getSlideShow();

  //assign image width
  $('.slideshow-images img').width($(window).width() * 0.7);
});


  // var imagePath = '/assets/';
  // var images = ['fish.jpg', 'elephant.jpg', 'giraffe.jpg', 'penguins.jpg'];

  // create the .slideshow-nav container
  // could also do $(element1).after(element2) --> reversed





