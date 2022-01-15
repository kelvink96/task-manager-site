$(document).ready(function(){
  $('.collapse-toggle').on('click', function() {
    $(".sidebar").toggleClass('sidebar--Collapse');
    $('.main').toggleClass('main--slide');	$('#toggleIcon').toggleClass('rotate');
  });
  $('[data-bs-toggle="tooltip"]').tooltip();
  $('[data-second-bs-toggle="tooltip"]').tooltip();
});
