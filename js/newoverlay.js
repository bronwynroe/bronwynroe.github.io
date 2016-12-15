$( document ).ready(function() {
  $(document).on('click', '.joel-overlay', function() {
    var fullSize = this.src.replace("-small", "");
    $("div.overlay").fadeIn(500);
    $("img.clickpic").attr("src", fullSize);
  });
  $(document).on('click', '.overlay-close', function() {
    $("div.overlay").fadeOut(500);
  });
});
