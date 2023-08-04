const heroSwiper = new Swiper(".swiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1500,
    // autoplay: {
    //     delay: 4000,
    // },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    a11y: false,
    slideVisibleClass: "slide-visible",
})
