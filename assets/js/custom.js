/* Slide show images in the header section */

$(function () {
  const $slides = $('.slideshow .slide');

  if ($slides.length <= 1) return;

  let current = 0;

  setInterval(function () {
    $slides.eq(current).removeClass('active');

    current = (current + 1) % $slides.length;

    $slides.eq(current).addClass('active');
  }, 5000);
});
