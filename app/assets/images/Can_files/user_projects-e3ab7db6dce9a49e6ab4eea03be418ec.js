function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function addToPage(project){
  // console.log(project)
  var content = project.content
  if(content.length > 10) content = content.substring(0,50) + '...'
  var title = project.title
  if(title.length > 10) title = title.substring(0,10) + '...'
  
  $('<li class="project"><h2><a href="/projects/'
    + project.id +'">'+title+
    '</a></h2><p>'+content+'</p></li>')
  .prependTo("#user-projects")
}

function getCurrentUserProjects(){
  // var userId = $('#user-projects')[0].dataset.userid;
  // console.log(userId); 
  request("GET","/projects", null).done(function(data){
    $.each(data, function(index,project){
      // //the crucial bit, filtering out only the ones from current user
      // if (project.user_id === userId) {
      //   addToPage(project)
      // }
    });
  });
}

$(document).ready(function(){
  console.log('User_Project.js loaded')
  getCurrentUserProjects()
});
