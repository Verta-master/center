//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__list').slideToggle();
  $('.menu').toggleClass('menu--opened');
})

//Header and menu on scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".header").addClass('header--shadow');
    $(".header__wrap").addClass('header__wrap--scroll');
    $(".menu").addClass('menu--shadow');
  } else {
    $(".header").removeClass('header--shadow');
    $(".header__wrap").removeClass('header__wrap--scroll');
    $(".menu").removeClass('menu--shadow');
  }
});
