 export const choiceSwiper = new Swiper(".choice__swiper", {
     keyboard: {
         enabled: true,
         onlyInViewport: true,
         pageUpDown: true
     },

     simulateTouch: true,
     grabCursor: true,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },

     breakpoints: {
         320: {
             slidesPerGroup: 0,
             spaceBetween: 1,
         },
         576: {
             slidesPerView: 3,
             slidesPerGroup: 1,
             spaceBetween: 24,
         },
         768: {

             slidesPerView: 3,
             spaceBetween: 24,
         },
         992: {
             slidesPerView: 3,
             spaceBetween: 24,
         },
         1400: {
             slidesPerView: 6,
             spaceBetween: 24,
         },
     },

     watchSlidesProgress: true,
     watchSlidesVisibility: true,
     a11y: false,
     slideVisibleClass: "slide-visible",
 });
