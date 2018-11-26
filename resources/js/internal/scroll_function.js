$(window).scroll(function() {
  if ($(document).scrollTop() > 1000) {
    $('#back-top').addClass('active');
  } else {
    $('#back-top').removeClass('active');
  }
});