// const $icon = $('img');
const $icon = $('.img');
const $menu = $('.overlay');

$icon.on('click', function(){
  if(!$menu.hasClass('active')) {
        $menu.fadeIn().toggleClass('active');
        $(".img:hover").css("color", "#f2f2f2");
  } else {
    $menu.fadeOut().removeClass('active');
  }
});