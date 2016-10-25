$(document).ready(function(){
	$('.hamburger-close').hide()

	$('.hamburger').click(function(){
		$('.hamburger').hide()
		$('.hamburger-close').show()
		$('.main-nav').css("display", "block");
		// $('.main-nav').css("width", "100%");
		// $('.nav-ul').css("display", "block");
		$('.nav-button').css("display", "block");
		// $('.hamburger').css("display", "none")
	});
	$('.hamburger-close').click(function(){
		$('.hamburger-close').hide()
		$('.hamburger').show()

		// $('.hamburger').css("display", "none");
		$('.main-nav').css("display", "none");
		// $('.main-nav').css("width", "100%");
		// $('.nav-ul').css("display", "none");
		$('.nav-button').css("display", "none");
		// $('.hamburger').css("display", "none")
	});
});
