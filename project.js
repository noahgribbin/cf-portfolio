(function(module){
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
    Project.allProjects = inputData.map(function(ele) {
      return new Project(ele);
    });
  };
  Project.numWordsAll = function(){
    return Project.allProjects.map(function(project){
      return project.body.split(' ').length;
    })
    .reduce(function(curr, next){
      return curr+next;
    }, 0);
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
  module.Project = Project;
})(window);
