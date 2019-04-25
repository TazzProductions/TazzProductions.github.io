

$(document).ready(function () {
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++)
// {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block")
//     {
//       content.style.display = "none";
//     } else
//     {
//       content.style.display = "block";
//     }
//   });
// }

//   accordion ------------------
$(".accordion a.toggle").on("click", function (a) {
  a.preventDefault();
  $(".accordion a.toggle").removeClass("act-accordion");
  $(this).addClass("act-accordion");
  if ($(this).next('div.accordion-inner').is(':visible'))
  {
    $(this).next('div.accordion-inner').slideUp();
  } else
  {
    $(".accordion a.toggle").next('div.accordion-inner').slideUp();
    $(this).next('div.accordion-inner').slideToggle();
  }
});
$('.cs-wrap .hero-wrap , .nav-holder').perfectScrollbar({});



//   scrollToFixed  ------------------
$(".scroll-nav-wrap").scrollToFixed({
  minWidth: 569,
  zIndex: 12,
  preUnfixed: function () {
    $(this).css("margin-top", "0");
  },
  preFixed: function () {
    if ($(window).width() < 1064) $(this).css("margin-top", "80px");
  }
});
$(".hidden-info-wrap-bg").scrollToFixed({
  minWidth: 1064,
  zIndex: 12,
  marginTop: 80,
  removeOffsets: true,
  limit: function () {
    var a = $(".limit-box").offset().top - $(".hidden-info-wrap-bg").outerHeight(true);
    return a;
  }
});
$(".fixed-column").scrollToFixed({
  minWidth: 1064,
  zIndex: 12,
  marginTop: 120,
  removeOffsets: true,
  limit: function () {
    var a = $(".limit-box").offset().top - $(".fixed-column").outerHeight(true) - 50;
    return a;
  }
});
if ($(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true))
{
  $(".fixed-bar").addClass("fixbar-action");
  $(".fixbar-action").scrollToFixed({
    minWidth: 1064,
    marginTop: function () {
      var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 100;
      if (a >= 0) return 20;
      return a;
    },
    removeOffsets: true,
    limit: function () {
      var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() - 20;
      return a;
    }
  });
} else $(".fixed-bar").removeClass("fixbar-action");