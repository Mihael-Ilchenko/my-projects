window.addEventListener("DOMContentLoaded", function () {
  // burger
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector(".header-nav").classList.toggle("burger--active"),
      document
        .querySelector(".menu-btn-elem-one")
        .classList.toggle("menu-btn-elem-one--active"),
      document
        .querySelector(".menu-btn-elem-two")
        .classList.toggle("menu-btn-elem-two--active"),
      document
        .querySelector(".menu-btn-elem-three")
        .classList.toggle("menu-btn-elem-three--active");
  });

  document.addEventListener("click", function (nav) {
    let target = nav.target;

    if (!target.closest(".header-nav, .burger-btn")) {
      document.querySelector(".header-nav").classList.remove("burger--active");
      document
        .querySelector(".menu-btn-elem-one")
        .classList.remove("menu-btn-elem-one--active");
      document
        .querySelector(".menu-btn-elem-two")
        .classList.remove("menu-btn-elem-two--active");
      document
        .querySelector(".menu-btn-elem-three")
        .classList.remove("menu-btn-elem-three--active");
    }
  });

  // search
  document.querySelector(".search-open").addEventListener("click", function () {
    document.querySelector(".form-search").classList.toggle("search--active");
  });
  document
    .querySelector(".search-btn-close")
    .addEventListener("click", function () {
      document.querySelector(".form-search").classList.remove("search--active");
    });

  document.addEventListener("click", function (search) {
    let target = search.target;

    if (!target.closest(".search-open, .form-search")) {
      document.querySelector(".form-search").classList.remove("search--active");
    }
  });
  // tabs
  document.querySelectorAll(".accordion__link").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      // 1
      document
        .querySelectorAll(".accordion-tabs-item")
        .forEach(function (TabsContent) {
          TabsContent.classList.remove("accordion-tabs-item--active");
        });
      document
        .querySelectorAll(".accordion__link")
        .forEach(function (tabsActiv) {
          tabsActiv.classList.remove("accordion__link--active");
        });
      // 1
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("accordion-tabs-item--active");
      document
        .querySelector(`[data-path="${path}"]`)
        .classList.add("accordion__link--active");
    });
  });
  // artist
  document.querySelectorAll(".artists__btn").forEach((item) => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdownArtist =
        this.parentElement.querySelector(".artists__dropdown");
      document.querySelectorAll(".artists__btn").forEach((el) => {
        if (el !== btn) {
          el.classList.remove("artists__btn--active");
        }
      });
      document.querySelectorAll(".artists__dropdown").forEach((el) => {
        if (el !== dropdownArtist) {
          el.classList.remove("artists__dropdown--active");
        }
      });
      dropdownArtist.classList.toggle("artists__dropdown--active");
      btn.classList.toggle("artists__btn--active");
    });
  });
  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".artists__direction-item")) {
      document.querySelectorAll(".artists__dropdown").forEach((el) => {
        el.classList.remove("artists__dropdown--active");
      });
      document.querySelectorAll(".artists__btn").forEach((el) => {
        el.classList.remove("artists__btn--active");
      });
    }
  });

  // mobile-catalog-scroll
  const breakpoint = 992;
  function getWindowWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }
  function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > breakpoint) {
      return;
    }

    const href = link.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  }
  document.querySelectorAll(".scroll").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToContent(this, true);
    });
  });
});
