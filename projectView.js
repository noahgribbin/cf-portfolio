projectView = {};
projectView.populateFilters = function(){
	$('article').not('.template').each(function(){
		var optionTag, category;
		category = $(this).attr('data-category')
		optionTag = '<option value="'+category+'">'+category+'</option>'
		$('#category-filter').append(optionTag)
	});
}
projectView.populateFilters();
