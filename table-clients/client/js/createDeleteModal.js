import { spinnerSvg } from './svg.js'

export function deleteModal() {
  const modalDelete = document.createElement("div");

  const modalContent = document.createElement("div");
  const modalButtonClose = document.createElement("button");
  const modalTitle = document.createElement("h2");
  const modalDescr = document.createElement("p");
  const modalButtonDelete = document.createElement("button");
  const modalButtonCancel = document.createElement("button");
  const spinner = document.createElement('span');

  modalDelete.classList.add("modal-wrap", "modal--active");
  modalContent.classList.add(
    "modal-content-delete",
    "modal-content",
    "modal-content--active"
  );
  modalButtonClose.classList.add("modal__button-close", "btn");
  modalTitle.classList.add("modal__title");
  modalDescr.classList.add("modal__descr");
  modalButtonDelete.classList.add("modal__delete", "modal__button-save", "btn");
  modalButtonCancel.classList.add(
    "modal__cancel",
    "modal__button-cancel",
    "btn"
  );
  spinner.classList.add('spinner');
  spinner.innerHTML = spinnerSvg;

  modalTitle.textContent = "Удалить клиента";
  modalDescr.textContent = "Вы действительно хотите удалить данного клиента?";
  modalButtonDelete.textContent = "Удалить";
  modalButtonDelete.prepend(spinner);
  modalButtonCancel.textContent = "Отмена";
  modalDelete.append(modalContent);
  modalContent.append(
    modalTitle,
    modalButtonClose,
    modalDescr,
    modalButtonDelete,
    modalButtonCancel
  );
//при прике вне модального окна удалить
  window.addEventListener("click", function (even) {
    if (even.target === modalDelete) {
      modalDelete.remove();
    }
  });

  modalButtonClose.addEventListener("click", function () {
    modalDelete.remove();
  });


  modalButtonCancel.addEventListener("click", function () {
    modalDelete.remove();
  });

  return {
    modalDelete,
    modalButtonDelete,
    modalButtonCancel,
    spinner,
  };
}
