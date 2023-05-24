// const { default: Swiper } = require("swiper");

const heroSwiper = new Swiper(".hero-swiper", {
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },

    simulateTouch: true,

    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    speed: 1500,
    autoplay: {
        delay: 3000,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    a11y: false,
    slideVisibleClass: "slide-visible",
    on: {
        init: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "-1";
                } else {
                    slide.tabIndex = "";
                }
            });
        },
        slideChange: function() {
            this.slides.forEach((slide) => {
                if (!slide.classList.contains("slide-visible")) {
                    slide.tabIndex = "-1";
                } else {
                    slide.tabIndex = "";
                }
            });
        },
    },



})


const specialSwiper = new Swiper(".special-swiper", {

    speed: 1500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerVew: 1,
            spaceBetween: 32,
        },
        576: {
            slidesPerGroup: 1,
            slidesPerVew: 2,
            spaceBetween: 32,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 32,
        }
    },
})


const usefulSwiper = new Swiper(".useful-swiper", {
    speed: 1500,
    slidesPerGroup: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerVew: 1,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        1400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    },
})



const semilarSwiper = new Swiper(".semilar-swiper", {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1500,

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerView: 2,
            spaceBetween: 16,
        },

        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 32,
        },

        800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 32,
        },

        1400: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 32,
        }
    },


})


const productSlider = new Swiper('.product-modal__swiper', {
    spaceBetween: 32,
    autoHeight: true,
    speed: 1500,
    thumbs: {
        swiper: {
            el: '.product-modal__swiper-mini',
            speed: 1500,
            spaceBetween: 16,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,

                },

                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },

                800: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },

                1400: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

    }
});