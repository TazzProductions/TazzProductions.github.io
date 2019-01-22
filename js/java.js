$(document).ready(function(){
  $('.bakcground-img').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });

    $(".pro").click(function(){
        $(".projects").slideToggle();
    });


    $(".abo").click(function(){
        $(".about").fadeTo();
    });


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $( ".con" ).click(function() {
        $( ".contact" ).fadeTo();
      });

    $(".javascript").click(function() {
        $(".js").slideToggle();
    })
    $(".html_css").click(function() {
        $(".htmlcss").slideToggle();
    })

});



// Notes
// $(".con").click(function(){
//     $(".contact").slideToggle();
//     });
// });
