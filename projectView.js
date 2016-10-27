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
	$('.main-nav .tab:first').click
}
projectView.navigation();
projectView.populateFilters();
