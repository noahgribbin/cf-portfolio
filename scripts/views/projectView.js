(function(module){
  projectView = {};

  projectView.hamburger = function(){
    $('.hamburger-close').hide();

    $('.hamburger').click(function() {
      $('.hamburger').hide();
      $('.hamburger-close').show();
      $('.main-nav').css('display', 'block');
      $('.nav-button').css('display', 'block');
    });
    $('.hamburger-close').click(function() {
      $('.hamburger-close').hide();
      $('.hamburger').show();
      $('.main-nav').css('display', 'none');
      $('.nav-button').css('display', 'none');
    });
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
      console.log(($('#category-filter option:contains("'+a.category+'")')));
      if ($('#category-filter option[value="'+a.category+'"]').length===0) {
        $('#category-filter').append(a.toHtml('#category-template'));
      }
    });
    projectView.hamburger();
    projectView.setTeaser();
    projectView.handleCategoryFilter();
    $('#fun-facts').text(Project.numWordsAll()+' words in all project bodies');
  };
  Project.fetchAll();
  module.projectView = projectView;
})(window);
