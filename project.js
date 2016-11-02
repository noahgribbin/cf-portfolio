function Project (parts){
  for (var keys in parts) {
	   this[keys] = parts[keys];
  }
};
Project.allProjects = [];

Project.prototype.toHtml = function(scriptTemplateId){
  var theTemplate = Handlebars.compile($(scriptTemplateId).text());

	 return theTemplate(this);
};
Project.loadAll = function(inputData){
  inputData.forEach(function(ele){
    Project.allProjects.push(new Project(ele));
  });
};
Project.fetchAll = function(){
  if(localStorage.myProjects){
    var parsedData = JSON.parse(localStorage.myProjects);
    Project.loadAll(parsedData);
    projectView.renderIndexPage();
    console.log('local');
  }else {
    $.getJSON('myProjects.json', function(data){
      var strigifiedData = JSON.stringify(data);
      localStorage.setItem('myProjects', strigifiedData);
      Project.loadAll(data);
      projectView.renderIndexPage();
      console.log('new');
    });
  }
};
