document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    dots: false,
  }).mount();
});
