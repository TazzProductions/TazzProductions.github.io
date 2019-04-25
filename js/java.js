$(document).ready(function () {
    $('.bakcground-img').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    $(".pro").click(function () {
        $(".projects").slideToggle();
    });


    $(".abo").click(function () {
        $(".about").fadeTo();
    });


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(".con").click(function () {
        $(".contact").fadeTo();
    });

    $(".javascript").click(function () {
        $(".js").slideToggle();
    });
    $(".html_css").click(function () {
        $(".htmlcss").slideToggle();
    });
    $(".htmlfive").click(function () {
        $(".html_five").slideToggle();
    });
    $(".python").click(function () {
        $(".python_").slideToggle();
    });

});

function Filter() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        } else
        {
            li[i].style.display = "none";
        }
    }
}