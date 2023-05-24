document.addEventListener("DOMContentLoaded", () => {
    // hero
    const swiper = new Swiper(".hero-swiper", {
        allowTouchMove: false,
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
    });

    // galery
    new Swiper(".galery-swiper-container", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row",
        },
        spaceBetween: 20,
        pagination: {
            el: ".galery__navigation .galery__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".galery__next",
            prevEl: ".galery__prev",
        },

        breakpoints: {
            568: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
            768: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 38,
            },
            992: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
            1400: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1900: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        a11y: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
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
    });

    // event
    let event = new Swiper(".event__swiper-container", {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: "row",
        },
        navigation: {
            nextEl: ".event__next",
            prevEl: ".event__prev",
            clickable: true,
        },
        spaceBetween: 20,
        pagination: {
            el: ".event__pagination",
            clickable: true,
        },
        breakpoints: {
            568: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 28,
            },
            1400: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
            },
        },
    });
    // partners
    let partners = new Swiper(".partners__swiper", {
        slidesPerGroup: 1,
        slidesPerView: 1,
        loop: true,
        grid: {
            rows: 1,
            fill: "row",
        },
        navigation: {
            nextEl: ".partners__next",
            prevEl: ".partners__prev",
            clickable: true,
        },
        spaceBetween: 20,
        breakpoints: {
            576: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 50,
            },
            768: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1024: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1400: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
});
