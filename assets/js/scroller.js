$("#scrolly").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#two").offset().top
  }, 750);
});

jQuery(document).ready(function($){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
          $('#backToTop').fadeIn('slow');
      } else {
          $('#backToTop').fadeOut('slow');
      }
  });
  $('#backToTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 750);
      return false;
  });
});