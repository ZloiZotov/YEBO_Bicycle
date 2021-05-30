
    // $('.slider__body').slick({
    //     // autoplay: true,
    //     // infinte: false,
    //     dots: true,
    //     arrows: false,
    //     slidersToShow: 1,
    //     autoplaySpeed: 3000,
    //     nextArrow: '<button type="button" class="slick-next"></button>',
    //     prevArrow: '<button type="button" class="slick-prev"></button>',
    //     adaptiveHight: true,
    //     respinsive: [{
    //         breakpoint: 768,
    //         settings: {}
    //     }]
    // });
    $(document).ready(function() {
        $('.slider__body').slick({
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            // speed: 300,
            slidesToShow: 1,
            // autoplaySpeed: 3000,
            nextArrow: '<button type="button" class="slick-next"></button>',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            adaptiveHeight: true,
            centerMode: false
        });
        // $('.slider__body').on('afterChange', animateHeightMultiElemental );
        // $('.slider__body').on('init', animateHeightMultiElemental );
    });

//     // Подстраивает высоту карусели к высоте показываемых слайдов
// // Альтернатива функции slick.animateHeight - dтличается тем, 
// // что может работать если показывается несколько слайдов за раз
// var animateHeightMultiElemental = function(event, slick, currentSlide, nextSlide) {
//     debugger;
//     var _ = slick;
//     var targetHeight = 0;
//     var $activeSlides;
//     if (_.options.adaptiveHeight === true && _.options.vertical === false) {
//         $activeSlides = _.$slideTrack.find('.slick-active');
//         // Находим наибольшую высоту у показываемых слайдов
//         $activeSlides.each(function() {
//             var height = $(this).outerHeight(true);
//             if (targetHeight < height) {
//                 targetHeight = height;
//             }
//         });
//         _.$list.animate({
//             height: targetHeight
//         }, _.options.speed);
//     }
// }