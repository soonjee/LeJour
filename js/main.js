window.addEventListener('DOMContentLoaded', () => {

    const main_slider = new Swiper('.main_slider', {
        loop: true,
        speed: 3500, //넘어가는 속도, autoplay에 넣었다가 안 먹혔었음.
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            // el: ".swiper-pagination",
            clickable: false,
        },
    })
})

$(function () {
    $('.sele_slider').slick({
        slidesToShow: 5,
        dots: false,
        arrows:false,
        // centerMode: true,
    })

    $('.sele_content .sele_arrows i:nth-child(1)').on('click', function () {
        $('.sele_slider').slick('slickPrev')
    });
    $('.sele_content .sele_arrows i:nth-child(2)').on('click', function () {
        $('.sele_slider').slick('slickNext')
    });
})

