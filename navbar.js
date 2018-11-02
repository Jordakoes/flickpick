// const $icon = $('img');
const $icon = $('#icon');
const $menu = $('.overlay');

$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
        $menu.fadeIn().toggleClass('active');
        $("body").css("overflow", "hidden");
  } else {
    $menu.fadeOut().removeClass('active');
    $("body").css("overflow", "auto");
  }
});

//Menu icon animation on click

$(document).ready(function(){
  $("#icon").click(function(){
      $("#icon").toggleClass("is-active");
  });
});

//FIXME: Need to apply this on page load but it happends earlier
//scroll To Top
//add this to btn to scroll top (in HTML)
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }