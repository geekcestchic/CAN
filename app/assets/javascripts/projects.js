function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function addToPage(project){
  var content = project.content
  if(content.length > 100) content = content.substring(0,100) + '...'
  var title = project.title
  if(title.length > 20) title = title.substring(0,20) + '...'
  $('<li class="project"><h2><a href="/projects/'
    + project.id +'">'+title+
    '</a></h2><p>'+content+'</p></li>')
  .prependTo(".container#projects")
}

function addToUserPage(project){
  var content = project.content
  if(content.length > 100) content = content.substring(0,100) + '...'
  var title = project.title
  if(title.length > 30) title = title.substring(0,30) + '...'
  $('<li class="project"><h2><a href="/projects/'
    + project.id +'">'+title+
    '</a></h2><p>'+content+'</p></li>')
  .appendTo("#user-projects")
}

// function addToCategoriesPage(project){
//   var content = project.content
//   // if(content.length > 100) content = content.substring(0,100) + '...'
//   var title = project.title
//   // if(title.length > 30) title = title.substring(0,30) + '...'
//   $('<li class="project"><h2><a href="/projects/'
//     + project.id +'">'+title+
//     '</a></h2><p>'+content+'</p></li>')
//   .appendTo(".categories-projects")
// }

function getProjects(){
  request("GET", "/projects", null).done(function(data){
    $.each(data, function(index,project){
      addToPage(project)
    });
  });
}

function getCurrentUserProjects(){
  var userId = $('#user-projects').data('userid');
  // console.log(userId); 
  request("GET","/projects", null).done(function(data){
    $.each(data, function(index,project){
      //the crucial bit, filtering out only the ones from current user
      if (project.user_id === userId) {
        addToUserPage(project)
      }
    });
  });
}

function getCategoriesProjects(){
  // var categoryId = $('.categories-projects').data('categoryid');
  // console.log(categoryId);
  // // console.log(userId); 
  // request("GET","/projects", null).done(function(data){
  //   $.each(data, function(index,project){
  //     var ids = [];
  //     $.each(project.categories, function(index, category){
  //       ids.push(category.id)
  //     });

  //     if ( $.inArray(categoryId,ids) !== -1) {
  //       addToCategoriesPage(project)
  //     }
  //   });
  // });
}

$(document).ready(function(){
  console.log('Project.js loaded')
  getProjects()
  getCurrentUserProjects()
  getCategoriesProjects()
  //making the lightbulg glow
  var rating = $('.average-rating').data('rating');
  if (rating > 3){
      $('.image').css('box-shadow', '0px 0px 5px yellow')
      $('.image').css('background', 'yellow')
      $('.image').css('border-radius', '40px')
      // $('.brilliance').text('<p>BRILLIANT IDEA!</p>')
  }
});