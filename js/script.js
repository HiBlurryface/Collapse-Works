$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 1) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
}

new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    simulateTouch: true,
    breakpoints: {
        1441: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        690: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    }
});