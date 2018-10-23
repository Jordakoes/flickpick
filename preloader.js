document.addEventListener("DOMContentLoaded", function(){
	// adding this line hides the scrollbar, but also in the main document
	// $("body").css("overflow", "hidden") 
	$('.preloader')
	.delay(2300)
	.fadeOut('slow')

	$('.preloader h1')
	.delay(1700)
	.fadeOut('slow');
});