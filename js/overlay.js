$(document).ready(function() {
  $(document).on('click', '.open-overlay', function() {
    var fullSize = this.src.replace("_small", "");
    $("div.overlay").fadeIn(500);
    $("img.clickpic").attr("src", fullSize);
  });
  $(document).on('click', '.overlay-close', function() {
    $("div.overlay").fadeOut(500);
    $("img.clickpic").attr("src", "");
  });
  $(document).on('click', 'div.overlay', function() {
    $("div.overlay").fadeOut(500);
    $("img.clickpic").attr("src", "");
  });
});
