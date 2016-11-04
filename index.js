$(document).ready(function() {
  $('.hamburger-close').hide();

  $('.hamburger').click(function() {
    $('.hamburger').hide();
    $('.hamburger-close').show();
    $('.main-nav').css('display', 'block');
    $('.nav-button').css('display', 'block');
  });
  $('.hamburger-close').click(function() {
    $('.hamburger-close').hide();
    $('.hamburger').show();
    $('.main-nav').css('display', 'none');
    $('.nav-button').css('display', 'none');
  });
});
