const heroSwiper = new Swiper(".hero-swiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    initialSlide: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    simulateTouch: true,
    touchRatio: 2,
    grabCursor: true,
    autoHeight: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 1500,
    autoplay: {
        delay: 4000,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    a11y: false,
    slideVisibleClass: "slide-visible",
})


const catalogSwiper = new Swiper(".catalog-swiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    simulateTouch: true,
    touchRatio: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 12,
        },
        768: {
            spaceBetween: 24,
            slidesPerGroup: 1,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 24,
            slidesPerGroup: 1,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
            slidesPerGroup: 2,
        }
    },
})
