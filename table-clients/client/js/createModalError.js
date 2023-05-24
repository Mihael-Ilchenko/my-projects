export function createModalError(error) {
  const modalError = document.createElement("div");
  const modalErrorContent = document.createElement("div");
  const modalErrorText = document.createElement("p");
  const modalErrorExit = document.createElement("button");

  modalErrorText.textContent = error;
  modalErrorExit.textContent = "Закрыть";

  modalError.classList.add("modal-error");
  modalErrorContent.classList.add(
    "modal-error__content",
    "modal-error__content--active"
  );
  modalErrorText.classList.add("modal-error__text");
  modalErrorExit.classList.add("modal-error__exit", "btn");

  modalError.append(modalErrorContent);
  modalErrorContent.append(modalErrorText, modalErrorExit);

  document.body.append(modalError);

  setTimeout(function () {
    modalError.style.transform = "translate(0)";
  }, 100);

    setTimeout(function () {
      modalError.style.opacity = '0';
       setTimeout(function() {modalError.remove()}, 10000);
    }, 9000);


  modalErrorExit.addEventListener("click", function () {
    modalError.remove();
  });

  return {
    modalError,
    modalErrorExit,
  };
}
