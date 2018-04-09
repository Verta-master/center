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

//Sidebar navigation
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.sidemenu__item a[href^="#"]').on('click', function (e) {
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
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
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
        else{
//            currLink.removeClass("sidebar__link--active");
        }
    });
}
