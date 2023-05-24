const btns = document.querySelectorAll(".modal-link");
const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".modal-close");
const bodyOverflowHidden = document.querySelector(".body");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");
    modals.forEach((el) => {
      el.classList.remove("modal--active");
    });
    document.querySelector(`[data-target="${path}"]`).classList.add("modal--active");
    modalOverlay.classList.add("modal-overlay--active");
    bodyOverflowHidden.classList.add("overflow-hidden");

  });
});

modalClose.forEach((el) => {
  el.addEventListener("click", () => {
    modals.forEach((el) => {
      el.classList.remove("modal--active");
    });
    modalOverlay.classList.remove("modal-overlay--active");
    bodyOverflowHidden.classList.remove("overflow-hidden");
  });
});

document.addEventListener("click", function (m) {
  let target = m.target;
  if (m.target == modalOverlay) {
    document.querySelector(".modal-overlay").classList.remove("modal-overlay--active");
    bodyOverflowHidden.classList.remove("overflow-hidden");
  }
});
