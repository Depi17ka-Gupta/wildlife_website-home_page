// $(window).scroll((function() {
//     var scroll;
//     $(window).scrollTop() <= 80 ? $("nav.navbar").removeClass("nav-active") : $("nav.navbar").addClass("nav-active")
// }))


$('.owl-carousel-1').owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    padding: 0,
    nav: false,
    dots: false,
    // autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            nav: false,
            dots: false,
        },
        500: {
            nav: false,
            dots: false,
        },
        600: {
            nav: false,
            dots: false,
        },
        992: {
            nav: true,
            dots: false,
        },
        1299: {
            nav: true,
            dots: false,
        },
        1499: {
            nav: true,
            dots: false,
        }
    },
    navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
});
$('.owl-carousel-2').owlCarousel({
    loop: true,
    items: 6,
    margin: 20,
    padding: 0,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false,
        },
        500: {
            items: 2,
            nav: false,
            dots: false,
        },
        600: {
            items: 3,
            nav: false,
            dots: false,
        },
        992: {
            items: 3,
            nav: true,
            dots: false,
        },
        1299: {
            nav: true,
            dots: false,
        },
        1499: {
            nav: true,
            dots: false,
        }
    },
    navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
});


$('.owl-carousel-3').owlCarousel({
    loop: true,
    items: 6,
    margin: 20,
    padding: 0,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            nav: false,
            dots: false,
        },
        500: {
            nav: false,
            dots: false,
        },
        600: {
            nav: false,
            dots: false,
        },
        992: {
            nav: true,
            dots: false,
        },
        1299: {
            nav: true,
            dots: false,
        },
        1499: {
            nav: true,
            dots: false,
        }
    },
    navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
});
$('.owl-carousel-5').owlCarousel({
    loop: true,
    items: 4,
    margin: 20,
    padding: 0,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        500: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 2,
            nav: false,
            dots: false,
        },
        992: {
            items: 3,
            nav: true,
            dots: false,
        },
        1299: {

            nav: true,
            dots: false,
        },
        1499: {
            nav: true,
            dots: false,
        }
    },
    navText: ["<i class='imgs img-chevron-left'></i>", "<i class='imgs img-chevron-right'></i>"]
});