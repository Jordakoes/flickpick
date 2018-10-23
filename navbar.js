// const $icon = $('img');
const $icon = $('.img');
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