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
  //TODO: Specify a class/id for the button
  $("button").click(function(){
      $("button").toggleClass("is-active");
  });
});