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
  if(content.length > 10) content = content.substring(0,100) + '...'
  var title = project.title
  if(title.length > 10) title = title.substring(0,20) + '...'
  $('<li class="project"><h2><a href="/projects/'
    + project.id +'">'+title+
    '</a></h2><p>'+content+'</p></li>')
  .prependTo(".container#projects")
}

function getProjects(){
  request("GET", "/projects", null).done(function(data){
    $.each(data, function(index,project){
      addToPage(project)
    });
  });
}

$(document).ready(function(){
  console.log('Project.js loaded')
  getProjects()
});
