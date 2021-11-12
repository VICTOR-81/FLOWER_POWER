document.addEventListener('DOMContentLoaded', function() {

  $(function() {

    $('.header__menu>ul>li:nth-child(1)').click(function(){
      $('.header__menu-drop').slideToggle(1000);
      $('.header__menu>ul>li:nth-child(1)>a').toggleClass('rotate');
    });

    $('.header__item-search').click(function() {
      $('.header__search-wrapper').slideDown(500);
    });

    $('.close').click(function() {
      $('.header__search-wrapper').slideUp(500);
    });

    $('.bestsellers__cards-slider, .boxwithflowers__cards-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.catalog__menu').click(function() {
      $('.catalog__menu-drop').slideToggle(1000);
      $('.catalog__menu-arrow').toggleClass('rotate');
    });

    // $('.catalog__menu-drop>li:nth-child(2)>a').click(function() {
    //   $('.catalog__menu-drop ul').slideToggle(1000);
    // });

    $('.catalog__filter-icon').click(function() {
      $('.catalog__filter').slideToggle(1000);
    });

  });

});