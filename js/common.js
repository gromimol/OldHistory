$(document).ready(function () {
  $(".select")
    .on("click", ".placeholder", function () {
      var parent = $(this).closest(".select");
      if (!parent.hasClass("is-open")) {
        parent.addClass("is-open");
        $(".select.is-open").not(parent).removeClass("is-open");
      } else {
        parent.removeClass("is-open");
      }
    })
    .on("click", "ul>li", function () {
      var parent = $(this).closest(".select");
      parent.removeClass("is-open").find(".placeholder").text($(this).text());
      parent
        .find("input[type=hidden]")
        .attr("value", $(this).attr("data-value"));
    });

  if ($(window).width() > 1300) {
    $(".articles-container").jScrollPane();
  }

  $(".js--popup").on("click", function (e) {
    e.preventDefault();

    let id = $(this).data("popup");
    $("#overlay").show();
    $("#" + id).show();
  });

  $(".close").on("click", function (e) {
    e.preventDefault();

    $("#overlay").hide();
    $(".popup").hide();
  });

  $(".close--inner").on("click", function (e) {
    e.preventDefault();

    $(this).closest(".popup").hide();
  });
});
