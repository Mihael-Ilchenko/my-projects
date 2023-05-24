import { createModalForm } from "./createModalForm.js";
import { sendClientObj } from "./clientApi.js";
import { validateClient } from "./validateClient.js";
import { validateContact } from "./validateContact.js";
import { createStrClient } from "./createStrClient.js";
import { createModalError } from './createModalError.js';

export function modalAddClient() {
  const createForm = createModalForm();
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");

  modal.classList.add("modal-wrap", "modal--active");
  modalContent.classList.add("modal-content", "modal-content--active");
  createForm.form.classList.add("add-client");
  document.body.classList.add("overflow-hidden");
  modal.append(modalContent);

  modalContent.append(
    createForm.buttonClose,
    createForm.title,
    createForm.form
  );
  //при отправке на сервер
  createForm.form.addEventListener("submit", async function (even) {
    even.preventDefault();
    const validClient = validateClient();
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "flex";

    let contactArr = [];
    let clientObj = {};
    const contactType = document.querySelectorAll(".contact__type-button");
    const contactInputValues = document.querySelectorAll(".contact__input");

    for (let i = 0; i < contactType.length; i++) {
      if (!validateContact(contactType[i], contactInputValues[i])) {
        setTimeout(function() {spinner.style.display = "none"}, 500);
        return;
      } else {
        contactArr.push({
          type: contactType[i].textContent,
          value: contactInputValues[i].value,
        });
      }
    }

    clientObj.surname = createForm.inputSurName.value;
    clientObj.name = createForm.inputName.value;
    clientObj.lastName = createForm.inputLastName.value;
    clientObj.contacts = contactArr;

    try {
      if (!validClient) {
        
        return;
      } else {
        const data = await sendClientObj(clientObj, "POST");
          document
            .querySelector(".clients__tbody")
            .append(createStrClient(data).str);
          document.querySelector(".modal-wrap").remove();
      }
    } catch (error) {
      createModalError(error);
    } finally {
        spinner.style.display = "none";
    }
  });

  //при клике вне модального окна
  document.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.remove();
      document.body.classList.remove("overflow-hidden");
    }
  });
  //закрыть при клике по кнопке
  createForm.buttonClose.addEventListener("click", function () {
    modal.remove();
    document.body.classList.remove("overflow-hidden");
  });

  createForm.buttonCancel.addEventListener("click", function (e) {
    e.preventDefault();
    modal.remove();
  });
  return modal;
}
