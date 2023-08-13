//page load JS
import $ from 'jquery';

$(function() {
    $('#page-content').load('../pages/home.html');
  
    $('#navbar').on('click', 'a', function(e) {
      e.preventDefault();
      $('#page-content').load($(this).attr('href'));
    });
});


//button JS
document.querySelector('.more-button').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});