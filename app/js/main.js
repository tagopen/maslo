(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  $(".intro__btn").click(function() {
    $(".intro__btn").removeClass('active');
    $(this).addClass('active');
  });

  $(".intro__btn--1").click(function() {
    $(".intro__img").removeClass('active');
    $(".intro__img--1").addClass('active');
  });

  $(".intro__btn--2").click(function() {
    $(".intro__img").removeClass('active');
    $(".intro__img--2").addClass('active');
  });

  $('.tooltipstered').tooltipster({
      contentCloning: true,
      theme: 'tooltipster-shadow',
      animation: 'fade',
      delay: 50,
      side: 'bottom',
      maxWidth: 460
  });
  $(function () {

    var $status       = $('.tech__count'),
        $slickElement = $('.tech__slider');
        
    if($slickElement.length) {
      $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $status.text(i + '/' + slick.slideCount);
      });

      $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        appendArrows: $('.tech__arrows'),
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="ic ic--left"></i></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="ic ic--right"></i></button>',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    $(function() {
      var $selectElement = $('.form-control--select');

      if ($selectElement) {
        $selectElement.select2({
          minimumResultsForSearch: Infinity,
          placeholder: $(this).data('placeholder'), 
          width: 'resolve'
        });
      }
    });
  });


})(jQuery); // End of use strict
