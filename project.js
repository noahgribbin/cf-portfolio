var projects = [];
function Project (parts){
	this.title = parts.title;
	this.body = parts.body;
	this.pic = parts.pic;
	this.category = parts.category;
};
Project.prototype.toHtml = function(){
	var $newproject = $('article.template').clone()
	$newproject.attr('data-category', this.category);
	$newproject.find('h1').text(this.title);
	$newproject.find('section.project-description').html(this.body);
	$newproject.find('.project-pic').attr('src', this.pic);
	$newproject.removeClass('template');
	return $newproject;
}
myProjects.forEach(function(ele){
	projects.push(new Project(ele));
});
projects.forEach(function(project){
	$('#projects').append(project.toHtml());
});
