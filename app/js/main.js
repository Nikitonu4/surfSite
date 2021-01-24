$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="">',
    nextArrow: ' <img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="">',
    asNavFor: '.slider__dots',
    autoplay: true, 
  });
  $('.slider__dots').slick(
    {
 slidesToShow: 4,
 slidesToScroll: 4,
 asNavFor: 'header__slider',
 autoplay: true, 
    }
  );

});