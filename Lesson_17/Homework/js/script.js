$(document).ready(function () {
  $(".main_nav nav ul li:eq(1) a, .main_btna, .main_btn:has(span)").on(
    "click",
    function (e) {
      e.preventDefault();
      $(".overlay").fadeIn("slow");
      $(".modal").slideDown("slow");
    }
  );

  $(".close").on("click", function (e) {
    e.preventDefault();
    $(".overlay").fadeOut("slow");
    $(".modal").slideUp("slow");
  });
});
