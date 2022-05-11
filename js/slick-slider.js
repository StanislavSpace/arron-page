//Slider-reviews
$(document).ready(function(){
    $('.reviews-slider-list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMOde: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:3
            }
        },{
            breakpoint: 320,
            settings: {
                slidesToShow:1
            }
        }
    ],
        mobileFirst: false
    });
});
// Slider-orders
$(document).ready(function(){
    $('.orders-slider-list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMOde: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },{
            breakpoint: 320,
            settings: {
                slidesToShow:1
            }
        }
        ],
        mobileFirst: false
    });
});
// Slider-orders
$(document).ready(function(){
    $('.gifts-slider-list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMOde: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },{
            breakpoint: 320,
            settings: {
                slidesToShow:1
            }
        }
        ],
        mobileFirst: false
    });
});

// Slider-company-info
$(document).ready(function(){
    $('.company-info-slider-list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMOde: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive:[
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },{
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }
        ],
        mobileFirst: false
    });
});

// Slider-company-info
$(document).ready(function(){
    $('.footer-slider-list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchTreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMOde: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive:[
        {
            breakpoint: 768,
            settings: {
                arrow: false
            }
        },{
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }
        ],
        mobileFirst: false
    });
});