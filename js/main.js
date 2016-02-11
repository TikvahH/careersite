$(document).ready(function() {
  $('#top').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: true
  });

  $('header').sticky({topSpacing: 0});

 $.localScroll({ selector: '.container' });

});



