document.addEventListener("DOMContentLoaded", function(){
	$('.preloader')
	.delay(2300)
	.fadeOut('slow')

	$('.preloader h1')
	.delay(1700)
	.fadeOut('slow');
});

//trying to get the scrollbar during preloader to hide...
//document.body.style.overflow = 'hidden';
//document.getElementById("test").style.overflow = 'hidden';