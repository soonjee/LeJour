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

