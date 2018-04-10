//Mobile menu
$('.menu__btn').click(function() {
  $('.menu__list').slideToggle();
  $('.menu').toggleClass('menu--opened');
})

//Header and menu on scroll
var screen1 = $('.promo').height() / 2;
var screen2 = $('.promo').height() + $('.feature').height() / 2;
var screen3 = $('.promo').height() + $('.feature').height() + $('.benefits').height() / 2;
var screen4 = $('.promo').height() + $('.feature').height() + $('.benefits').height() + $('.test').height() / 2;
var screen5 = $('.promo').height() + $('.feature').height() + $('.benefits').height() + $('.test').height() + $('.order').height() / 2;

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
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) < screen1) {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
  } 
  else if (((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) > screen1) && ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) < screen2)) {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
    $('.sidemenu__item:first-child a').addClass('sidemenu__link--active');
  }
  else if (((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) > screen2) && ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) < screen3)) {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
    $('.sidemenu__item:nth-child(2) a').addClass('sidemenu__link--active');
  }
  else if (((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) > screen3) && ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) < screen4)) {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
    $('.sidemenu__item:nth-child(3) a').addClass('sidemenu__link--active');
  }
  else if (((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) > screen4) && ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) < screen5)) {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
    $('.sidemenu__item:nth-child(4) a').addClass('sidemenu__link--active');
  }
  else {
    $('.sidemenu__item a').removeClass("sidemenu__link--active");
    $('.sidemenu__item:nth-child(5) a').addClass('sidemenu__link--active');
  }
});

//Sidebar navigation
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.sidemenu__link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('sidemenu__link--active');
        })
        $(this).addClass('sidemenu__link--active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 500, 'swing', function () {
//            window.location.hash = target;
//            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebar__item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidemenu__item a').removeClass("sidemenu__link--active");
            currLink.addClass("sidemenu__link--active");
        }
    });
}
