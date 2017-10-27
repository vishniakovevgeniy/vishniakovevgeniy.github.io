/** Выпадающее меню */
$(document).ready(function() {

  $(".out_btn").click(function() {
    $(".top_nav").slideToggle("slow", function() {
    });
  });
});
$(document).ready(function() {
  $(".top_nav").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({scrollTop: top}, 1000);
  });
});

$(document).ready(function() {
    $(".info").on("click", "a", function(event) {
      event.preventDefault();
      var id = $(this).attr("href"),
          top = $(id).offset().top;
      $("body,html").animate({scrollTop: top}, 1500);
    });
  });

$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'fade',
    autoDirection: 'next',
    auto: true
  });
});

$(function() {
  $(".out_btn").click(function () {
    $(".menu").addClass('active');
  })
});
