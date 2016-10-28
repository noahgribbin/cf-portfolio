projectView = {};
projectView.populateFilters = function(){
	$('article').not('.template').each(function(){
		var optionTag, category;
		category = $(this).attr('data-category')
		optionTag = '<option value="'+category+'">'+category+'</option>'
		$('#category-filter').append(optionTag)
	});
}
projectView.navigation = function(){
	$('.main-nav').on('click', '.tab', function(){
		$('.tab-content').hide()
		var connector = $(this).attr('data-content');
		$('#'+connector).fadeIn();
	});
	$('.main-nav .tab:first').click();
}
projectView.setTeaser = function(){
	$('.project-description *:nth-of-type(n+2)').hide();
	$('#projects').on('click', 'a.read-on', function(event){
		event.preventDefault();
		$(this).parent().find('*').fadeIn();
		$(this).hide()
	})
}
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
	})
}

projectView.setTeaser();
projectView.navigation();
projectView.populateFilters();
projectView.handleCategoryFilter();
