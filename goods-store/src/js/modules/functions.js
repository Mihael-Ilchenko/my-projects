import { gsap } from "gsap";
import noUiSlider from "nouislider";

export const isWebp = () => {
  function testWebp(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebp(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
};

const writeInValue = (active, arrItems, tl, removeClass) => {
  arrItems.forEach((link) => {
    link.addEventListener("click", () => {
      active.textContent = link.textContent;
      tl.reverse();
      active.classList.remove(removeClass);
    });
  });
};

export const geoDropdown = () => {
  if (document.querySelector(".geo")) {
    const btnGeo = document.querySelector(".geo__city-btn");
    const geoDrop = document.querySelector(".geo__dropdown");
    const geoItems = document.querySelectorAll(".geo__link");

    const geoTl = gsap.timeline({ paused: true });
    geoTl.fromTo(
      geoDrop,
      { opacity: 0, y: 150, scale: 0 },
      {
        display: "block",
        scale: 1,
        opacity: 1,
        ease: "expo",
        y: 0,
        duration: 0.3,
      }
    );

    writeInValue(btnGeo, geoItems, geoTl, "geo--active");

    btnGeo.addEventListener("click", () => {
      if (!btnGeo.classList.contains("geo--active")) {
        btnGeo.classList.add("geo--active");
        geoTl.play();
      } else {
        btnGeo.classList.remove("geo--active");
        geoTl.reverse();
      }
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".geo") && !target.closest(".geo__city-btn")) {
        btnGeo.classList.remove("geo--active");
        geoTl.reverse();
      }
    });
  }
};

export const categoryDropdown = () => {
  if (document.querySelector(".select-category")) {
    const btnCategory = document.querySelector(".select-category__btn");
    const categoryDrop = document.querySelector(".select-category__dropdown");
    const categoryItems = document.querySelectorAll(".select-category__link");

    const categoryTl = gsap.timeline({ paused: true });
    categoryTl.fromTo(
      categoryDrop,
      { opacity: 0, y: 150, scale: 0 },
      {
        display: "block",
        scale: 1,
        opacity: 1,
        ease: "expo",
        y: 0,
        duration: 0.3,
      }
    );

    writeInValue(
      btnCategory,
      categoryItems,
      categoryTl,
      "select-category--active"
    );

    btnCategory.addEventListener("click", () => {
      if (!btnCategory.classList.contains("select-category--active")) {
        btnCategory.classList.add("select-category--active");
        categoryTl.play();
      } else {
        btnCategory.classList.remove("select-category--active");
        categoryTl.reverse();
      }
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".select-category") &&
        !target.closest(".select-category__btn")
      ) {
        btnCategory.classList.remove("select-category--active");
        categoryTl.reverse();
      }
    });
  }
};

export const burgerMenu = () => {
  if (document.querySelector(".burger-menu")) {
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerBtn = document.querySelector(".burger-menu__btn");
    const burgerDrop = document.querySelector(".burger-menu__dropdown");
    const burgerItems = document.querySelectorAll(".burger-menu__link");

    const burgerTl = gsap.timeline({ paused: true });
    burgerTl
      .to(".burger-line-one", { x: 100, opacity: 0, duration: 0.2 })
      .to(".burger-line-two", { x: 100, opacity: 0, duration: 0.2 })
      .to(".burger-line-three", { x: 100, opacity: 0, duration: 0.2 })
      .fromTo(
        burgerDrop,
        {},
        { display: "block", y: 0, opacity: 1, ease: "expo", duration: 0.4 }
      )
      .fromTo(
        ".burger-menu__svg",
        { opacity: 0, y: 100 },
        { display: "block", y: 0, opacity: 1 }
      )
      .to(".burger-menu__list", { y: 0, opacity: 1, duration: 0.3 });

    burgerItems.forEach((item) => {
      item.addEventListener("click", () => {
        burgerMenu.classList.remove("burger-menu--active");
        burgerTl.reverse();
        // document.body.classList.remove('overflow-hidden-y')
      });
    });

    burgerBtn.addEventListener("click", () => {
      if (!burgerMenu.classList.contains("burger-menu--active")) {
        burgerMenu.classList.add("burger-menu--active");
        burgerTl.play();
        // document.body.classList.add('overflow-hidden-y')
      } else {
        burgerMenu.classList.remove("burger-menu--active");
        burgerTl.reverse();
      }
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".burger-menu") &&
        !target.closest(".burger-menu__btn")
      ) {
        burgerMenu.classList.remove("burger-menu--active");
        burgerTl.reverse();
      }
    });
  }
};

export const customizablePrice = () => {
  if (document.getElementById("customizable-price")) {
    const checkNumbers = /[^0-9]+$/g;

    const slider = document.getElementById("customizable-price");
    const inputFrom = document.getElementById("price-from");
    const inputTo = document.getElementById("price-to");
    const inputs = [inputFrom, inputTo];

    noUiSlider.create(slider, {
      start: [2000, 150000],
      connect: true,
      step: 1000,
      range: {
        min: 0,
        max: 250000,
      },
      format: {
        to: function (value) {
          return Math.round(value);
        },

        from: function (value) {
          return value;
        },
      },
    });

    slider.noUiSlider.on("update", function (values, handle) {
      inputs[handle].value = values[handle];
    });

    inputFrom.addEventListener("change", function () {
      if (!checkNumbers.test(inputFrom.value)) {
        slider.noUiSlider.set([this.value, null]);
      }
    });
    inputTo.addEventListener("change", function () {
      if (!checkNumbers.test(inputTo.value)) {
        slider.noUiSlider.set([null, this.value]);
        console.log("sdfs");
      }
    });
  }
};

export const filterDrop = () => {
  if (document.querySelector(".filter-tablet__form")) {
    const btns = document.querySelectorAll(".filter-tablet__btn");
    const drop = document.querySelectorAll(".filter-tablet__dropdown");

    for (let i = 0; i < btns.length; i++) {
      btns[i].setAttribute("data-path", `filter-${i + 1}`);
      drop[i].setAttribute("data-target", `filter-${i + 1}`);
    }

    btns.forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path;

        if (
          !document
            .querySelector(`[data-target="${path}"]`)
            .classList.contains("filter-tablet__dropdown--active")
        ) {
          drop.forEach(function (TabsContent) {
            gsap.to(TabsContent, { opacity: 0, y: 150, display: "none" });
            TabsContent.classList.remove("filter-tablet__dropdown--active");
          });
          btns.forEach(function (tabsActive) {
            tabsActive.classList.remove("filter-tablet__btn--active");
          });
          gsap.fromTo(
            `[data-target="${path}"]`,
            { opacity: 0, y: 150 },
            { opacity: 1, y: 0, display: "block" }
          );
          document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("filter-tablet__dropdown--active");
          document
            .querySelector(`[data-path="${path}"]`)
            .classList.add("filter-tablet__btn--active");
        } else {
          gsap.to(`[data-target="${path}"]`, {
            opacity: 0,
            y: 150,
            display: "none",
          });
          document
            .querySelector(`[data-target="${path}"]`)
            .classList.remove("filter-tablet__dropdown--active");
          document
            .querySelector(`[data-path="${path}"]`)
            .classList.remove("filter-tablet__btn--active");
        }
      });
    });

    const additBtnDrop = document.querySelectorAll(".addit-group__btn");
    const additListDrop = document.querySelectorAll(".addit-group__list");

    for (let i = 0; i < additBtnDrop.length; i++) {
      additBtnDrop[i].setAttribute("data-path", `addit-drop-${i + 1}`);
      additListDrop[i].setAttribute("data-target", `addit-drop-${i + 1}`);
    }
    additBtnDrop.forEach((btn) => {
      btn.textContent =
        "+ еще " +
        document.querySelectorAll(`[data-target="${btn.dataset.path}"] > li`)
          .length;

      btn.addEventListener("click", (event) => {
        const path = event.currentTarget.dataset.path;

        if (
          !document
            .querySelector(`[data-target="${path}"]`)
            .classList.contains("addit-group__list--active")
        ) {
          additListDrop.forEach((content) => {
            content.classList.remove("addit-group__list--active");
          });

          document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("addit-group__list--active");
          btn.textContent = "Свернуть";
        } else {
          document
            .querySelector(`[data-target="${path}"]`)
            .classList.remove("addit-group__list--active");
          btn.textContent =
            "+ еще " +
            document.querySelectorAll(
              `[data-target="${btn.dataset.path}"] > li`
            ).length;
        }
      });
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".filter-tablet__group") &&
        !target.closest(".filter-tablet__btn")
      ) {
        drop.forEach(function (TabsContent) {
          gsap.to(TabsContent, { opacity: 0, y: 150, display: "none" });
          TabsContent.classList.remove("filter-tablet__dropdown--active");
        });
        btns.forEach(function (tabsActive) {
          tabsActive.classList.remove("filter-tablet__btn--active");
        });
      }
    });

    window.addEventListener("click", (e) => {
      const target = e.target;
      if (
        !target.closest(".addit-group__item") &&
        !target.closest(".addit-group__btn")
      ) {
        additListDrop.forEach((list) => {
          list.classList.remove("addit-group__list--active");
        });
        additBtnDrop.forEach((btn) => {
          btn.textContent =
            "+ еще " +
            document.querySelectorAll(
              `[data-target="${btn.dataset.path}"] > li`
            ).length;
        });
      }
    });


    let widthViewport = document.documentElement.clientWidth;

    if (widthViewport <= 576) { 

      const items = document.querySelectorAll('.label-text');
      
     for(let i = 0; i < items.length; i++) {



      if(items[i].textContent.trim().length > 7) {
        items[i].textContent = items[i].textContent.trim().replace('ый', '...');
        items[i].textContent = items[i].textContent.trim().replace('ры', '...');
      }
    }

    }
  }
};

export const catalogLists = () => {
  if (document.querySelector(".catalog-tabs")) {
    const catalog = document.querySelector(".catalog-tabs");
    const items = Array.from(document.querySelectorAll(".catalog__item"));
    let count = 9;

    for (let i = 0; i < items.length / count; i++) {
      const listPag = document.querySelector(".list-pag");
      const item = document.createElement("li");
      item.classList.add("list-pag__item");
      const link = document.createElement("a");
      link.classList.add("list-pag__link", "scroll", "link-reset");
      link.href = "#catalog-tab";
      link.setAttribute("data-path", `catalog-item-${i + 1}`);
      link.textContent = i + 1;
      item.append(link);
      listPag.append(item);
    }

    for (let j = 0; j < items.length; j++) {
      if (j < count) {
        items[j].setAttribute("data-target", "catalog-item-1");
      }
      if (j >= count) {
        items[j].setAttribute("data-target", "catalog-item-2");
      }
    }

    const links = document.querySelectorAll(".list-pag__link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const path = event.currentTarget.dataset.path;

        if (
          !document
            .querySelector(`[data-path="${path}"]`)
            .classList.contains("list-pag__link--active")
        ) {
          items.forEach((item) => {
            item.style.display = "none";
          });
          links.forEach((link) => {
            link.classList.remove("list-pag__link--active");
          });
          document
            .querySelectorAll(`[data-target="${path}"]`)
            .forEach((item) => (item.style.display = "block"));
          document
            .querySelector(`[data-path="${path}"]`)
            .classList.add("list-pag__link--active");
        }
      });
    });

    document
      .querySelectorAll(`[data-target=catalog-item-1]`)
      .forEach((item) => (item.style.display = "block"));
    document
      .querySelector(".list-pag__link")
      .classList.add("list-pag__link--active");
    let widthViewport = document.documentElement.clientWidth;

    if (widthViewport <= 768) {
      document
        .querySelectorAll(".list-pag__item")
        .forEach((item) => item.remove());
      items.forEach((item) => (item.style.display = "none"));
      let count = 6;

      for (let i = 0; i < items.length / count; i++) {
        const listPag = document.querySelector(".list-pag");
        const item = document.createElement("li");
        item.classList.add("list-pag__item");
        const link = document.createElement("a");
        link.classList.add("list-pag__link", "scroll", "link-reset");
        link.href = "#catalog-tab";
        link.setAttribute("data-path", `catalog-item-${i + 1}`);
        link.textContent = i + 1;
        item.append(link);
        listPag.append(item);
      }

      for (let j = 0; j < items.length; j++) {
        if (j < count) {
          items[j].setAttribute("data-target", "catalog-item-1");
        }
        if (j >= count) {
          items[j].setAttribute("data-target", "catalog-item-2");
        }
        if (j >= count * 2) {
          items[j].setAttribute("data-target", "catalog-item-3");
        }
      }

      const links = document.querySelectorAll(".list-pag__link");

      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          const path = event.currentTarget.dataset.path;

          if (
            !document
              .querySelector(`[data-path="${path}"]`)
              .classList.contains("list-pag__link--active")
          ) {
            items.forEach((item) => {
              item.style.display = "none";
            });
            links.forEach((link) => {
              link.classList.remove("list-pag__link--active");
            });
            document
              .querySelectorAll(`[data-target="${path}"]`)
              .forEach((item) => (item.style.display = "block"));
            document
              .querySelector(`[data-path="${path}"]`)
              .classList.add("list-pag__link--active");
          }
        });
      });

      document
        .querySelectorAll(`[data-target=catalog-item-1]`)
        .forEach((item) => (item.style.display = "block"));
      document
        .querySelector(".list-pag__link")
        .classList.add("list-pag__link--active");
    }
  }
};



 export const productTab = () => {

     const itemContents = document.querySelectorAll('.product__item');
     const links = document.querySelectorAll('.product-link');

     links.forEach(function (tabsBtn) {
       tabsBtn.addEventListener("click", function (event) {
         const path = event.currentTarget.dataset.path;     
          localStorage.setItem('product', path)
       });
     });
 }


export const productModalScale = () => {
 if(document.querySelector('.product')) {
  const challengeModal = document.querySelectorAll('.pic-row');
  const items = document.querySelectorAll('.product-modal__item');
  const productModal = document.querySelector('.product-modal');
  const modalClose = document.querySelectorAll('.product-modal__close');


  const productTl = gsap.timeline({ paused: true });
  productTl.fromTo(productModal, { opacity: 0}, {display: 'flex', opacity: 1,} )
  productTl.from('.product-modal > div', { scale: 0, opacity: 0 });
  
  




  challengeModal.forEach(e => {
    e.addEventListener('click', event => {
      const path = event.currentTarget.dataset.path;
         items.forEach(item => item.style.display = 'none');
        document.querySelector(`[data-target="${path}"]`).style.display = 'block';
        productTl.play();      
        document.body.style.overflow = 'hidden'
    })
  })

  window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".product-modal-wrap") && !target.closest(".pic-row")) {
      document.body.classList.remove('overflow-y-hidden');
      productTl.reverse();
      document.body.style.overflow = 'auto'
    }
  });


  modalClose.forEach(btn => {
    btn.addEventListener('click', () => {
      productTl.reverse();
      document.body.style.overflow = 'auto'
    })
  })

 }

}


export const modalOneClick = () => {
  const btnsClick = document.querySelectorAll('.buy-click');
  const modalClose = document.querySelectorAll('.modal__close');
  const modalForm = document.querySelector('.modal__form');


  const modaClicklTl = gsap.timeline({ paused: true });
  modaClicklTl.fromTo('.buy-modal', { opacity: 0, },{display: "flex", opacity: 1, duration: 0.3,});
  modaClicklTl.from('.buy-modal > div', { scale: 0, opacity: 0 });



  const modaQwertylTl = gsap.timeline({ paused: true });
   modaQwertylTl.fromTo('.thanks', { opacity: 0, },{display: "flex", opacity: 1, duration: 0.3,});
   modaQwertylTl.from('.thanks > div', { scale: 0, opacity: 0 })


  btnsClick.forEach(btn => {
    btn.addEventListener('click', () => {
      modaClicklTl.play();
         classListAddBody()
    })
  })

  modalClose.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.remove('overflow-y-hidden');
      modaClicklTl.reverse();
      modaQwertylTl.reverse();
    })
  })
  

  window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".modal-wrap") && !target.closest(".modal-link-js")) {
      document.body.classList.remove('overflow-y-hidden');
       modaClicklTl.reverse();
        modaQwertylTl.reverse();
    }
  });


  modalForm.addEventListener('submit', (e) => {
     e.preventDefault();
     document.body.classList.remove('overflow-y-hidden');
     modaClicklTl.reverse();
     modaQwertylTl.play();
     classListAddBody()
  })
}


export const scroll = () => {
  const breakpoint = 1920;
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
};

function classListAddBody() {
  document.body.classList.add('overflow-y-hidden');
}

