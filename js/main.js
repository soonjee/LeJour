window.addEventListener('DOMContentLoaded', () => {

    const main_slider = new Swiper('.main_slider', {
        loop: true,
        speed: 3500,
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

