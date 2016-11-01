projectView = {};

projectView.navigation = function(){
  $('.main-nav').on('click', '.tab', function(){
    $('.tab-content').hide();
	  var connector = $(this).attr('data-content');
	  $('#'+connector).fadeIn();
  });
  $('.main-nav .tab:first').click();
};
projectView.setTeaser = function(){
  $('.project-description *:nth-of-type(n+2)').hide();
  $('#projects').on('click', 'a.read-on', function(event){
    event.preventDefault();
	  $(this).parent().find('*').fadeIn();
	  $(this).hide();
  });
};
projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function(){
	  if ($(this).val()) {
		  $('article').hide();
		  var categoryConnector = $(this).val();
    $('article[data-category="'+categoryConnector+'"]').fadeIn();
 	}
    else {
    $('article').not('.template').show();
	  }
  });
};
projectView.renderIndexPage = function(){
  Project.allProjects.forEach(function(a){
    $('#projects').append(a.toHtml('#project-template'));
    // console.log(a.toHtml('#project-template'));
    console.log(($('#category-filter option:contains("'+a.category+'")')));
    if ($('#category-filter option[value="'+a.category+'"]').length===0) {
      $('#category-filter').append(a.toHtml('#category-template'));
      // console.log(a.toHtml('#category-template'));
    }
  });
  projectView.setTeaser();
  projectView.navigation();
  projectView.handleCategoryFilter();
};
Project.fetchAll();
