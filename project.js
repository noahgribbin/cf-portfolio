var projects = [];
function Project (parts){
	 this.title = parts.title;
	 this.body = parts.body;
	 this.pic = parts.pic;
	 this.category = parts.category;
};
Project.prototype.toHtml = function(){
	 var templateScript = $('#project-template').html();
	 var theTemplate = Handlebars.compile(templateScript);
	 return theTemplate(this);
};
Project.prototype.populateFilter = function(){
  var categoryScript = $('#category-template').html();
  var populateFunction = Handlebars.compile(categoryScript);
  return populateFunction(this);
};
myProjects.forEach(function(ele){
	 projects.push(new Project(ele));
});
projects.forEach(function(project){
  $('#projects').append(project.toHtml());
  $('#category-filter').append(project.populateFilter());
});
