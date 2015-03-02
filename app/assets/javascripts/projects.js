function request(method, url, data){
  return $.ajax({
    url: url,
    method: method,
    dataType: "json",
    data: data
  })
}

function addToPage(project){
  console.log(project)
  $('<li><h2><a href="/projects/'
    +project.id +'">'+project.title+
    '</a></h2><p>'+project.content+'</p></li>')
  .prependTo("#projects")
}

function getProjects(){
  request("GET", "/projects", null).done(function(data){
    $.each(data, function(index,project){
      addToPage(project)
    });
  });
}

$(function(){
  console.log('Javascript loaded')
  getProjects()
});