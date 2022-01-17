$.fn.toggleHTML = function(t1, t2){
  if(this.html() == t1){
    this.html(t2);
  }else{
    this.html(t1);
  }
  return this;
};

$(document).ready(function(){
  $('.collapse-toggle').on('click', function() {
    $(".sidebar").toggleClass('sidebar--Collapse');
    $('.main').toggleClass('main--slide');	$('#toggleIcon').toggleClass('rotate');
  });
  $('[data-bs-toggle="tooltip"]').tooltip();
  $('[data-second-bs-toggle="tooltip"]').tooltip();


  $('.btn-sub-task-collapse').on('click', (evt) => {
    const _this = $(evt.target).parent();

    _this.find("span").toggleHTML("show more", "show less");
    _this.find("i").toggleClass("fa-expand-arrows-alt");
  })
});
