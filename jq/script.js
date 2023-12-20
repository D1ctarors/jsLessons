$(document).ready(function () {
  $("button:first").hover(function () {
    $(this).toggleClass("active");
  });

  $("button:eq(2)").on("click", function () {
    $(".image:even").fadeToggle("slow");
  });
  $("button:eq(4)").on("click", function () {
    $(".image:odd").animate(
      {
        opacity: "togle",
        height: "togle",
      },
      3000
    );
  });
});
