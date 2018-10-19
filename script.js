document.addEventListener("DOMContentLoaded", function(){
	$('.preloader')
	.delay(2000)
	.fadeOut('slow')

	$('.preloader h1')
	.delay(1000)
	.fadeOut('slow');

});

//trying to get the scrollbar during preloader to hide...
//document.body.style.overflow = 'hidden';
//document.getElementById("test").style.overflow = 'hidden';