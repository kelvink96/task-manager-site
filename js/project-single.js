$(function () {
  function $(id) {
    return document.getElementById(id);
  }

  dragula([$('1'), $('2'), $('3'), $('4'), $('5')], {
    // revertOnSpill: true,
  }).on('drop', function (el) {
    console.log(el);
  });
})
