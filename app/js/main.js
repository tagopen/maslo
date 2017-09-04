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

})(jQuery); // End of use strict