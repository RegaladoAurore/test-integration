import 'bootstrap';
import './scss/custom.scss';
import './scss/main.scss';
import $ from 'jquery';
import 'slick-carousel';

$(function () {

    // Add box-shadow at .header when is in sticky state (stuck)
    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        const headerSelector = $('.c-header');

        (scrollPosition > headerSelector.outerHeight()) ? headerSelector.addClass('is-sticky') : headerSelector.removeClass('is-sticky');
    });

    // Toggle menu - mobile
    if ($(window).width() < 992) {
        $('[data-target="js-menu"]').on('click', function () {
            $('.c-menu__list-items, .c-burger').toggleClass('is-active');
        });
    }

    // Slick slider - Software list
    if ($(window).width() < 1270) {
        $('.c-softwares__list').slick({
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: '20px',
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1269,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

});

