$(document).ready(function () {
  var list_detail = [
    "detail-carousel-1", 
    "detail-carousel-2",
    "detail-carousel-3",
    "detail-carousel-4",
    "detail-carousel-5",
  ];
  
  var list_carousel = [
    "card-carousel-1", 
    "card-carousel-2",
    "card-carousel-3",
    "card-carousel-4",
    "card-carousel-5",
  ];

  $(() => {
    $.each(list_detail, function (i, v) {
      $("." + v).addClass("d-none");
    });
  });

  $(".owl-carousel").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 30,
    responsive: {
      600: {
        items: 4,
      },
    },
  });

  $.each(list_carousel, function (index, value) {
    $("." + value).click(() => {
      var id = $("." + value).data("id");
      // console.log(id);
      // $("#detail-" + id).removeClass("d-none");
      $.each(list_detail, function (i, v) {
        var nameList = "detail-carousel-" + id;
        // console.log(nameList);
        if (v == nameList) {
          $("." + v)
            .removeClass("d-none")
            .addClass("d-block");
        } else {
          $("." + v)
            .removeClass("d-block")
            .addClass("d-none");
        }
      });
    });
  });
});
