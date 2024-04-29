// SplideJS Initialization
document.addEventListener( 'DOMContentLoaded', function() {
var splide = new Splide( '#splidetestimoni', {
  perPage: 2,
  breakpoints: {
    600: {
      perPage: 1
    }
  },
  focus  : 0,
  omitEnd: true,
  } );
  splide.mount();
  
  var splide2 = new Splide( '#splidepaket', {
    perPage: 1,
    focus  : 0,
    omitEnd: true,
    } );
  splide2.mount();

} );
