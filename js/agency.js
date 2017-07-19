/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
function scrollTo(anchor) {
  $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top
  }, 1500, 'easeInOutExpo');
}

$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var href = $(this).attr('href');
    scrollTo(href);
    history.pushState(null, null, href);
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
function GetURLParameter(sParam)
{
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}

$(function() {
  if (GetURLParameter('contacted') == '1') {
    $('#contacted-thanks').show();
  }
  if (window.location.hash) {
    scrollTo(window.location.hash);
  }
});
