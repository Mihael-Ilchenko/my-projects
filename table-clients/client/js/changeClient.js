import { createModalForm } from "./createModalForm.js";
import { deleteModal } from "./createDeleteModal.js";
import { createContact } from "./createContact.js";
import { sendClientObj } from "./clientApi.js";
import { createStrClient } from "./createStrClient.js";
import { validateClient } from "./validateClient.js";
import { validateContact } from "./validateContact.js";
import { createModalError } from './createModalError.js'

export function changeClient(obj) {
  const changeModal = document.createElement("div");
  const changeModalContent = document.createElement("div");

  const createForm = createModalForm();

  changeModal.classList.add("modal-wrap", "modal--active");
  changeModalContent.classList.add("modal-content", "modal-content--active");
  createForm.title.textContent = "Изменить данные";
  createForm.buttonCancel.textContent = "Удалить клиента";
  createForm.form.classList.add("add-client");

  const idDescr = document.createElement("span");
  idDescr.classList.add("modal__id");
  idDescr.textContent = `ID: ${obj.id.substr(0, 6)}`;
  createForm.title.append(idDescr);


  //при клике по копке предупреждение модальное
  createForm.buttonCancel.addEventListener("click", function (even) {
    even.preventDefault();


    const deleteClient = deleteModal();
    document.body.append(deleteClient.modalDelete);

    //в случае подтвердения удалит из дом и из сервера
    deleteClient.modalButtonDelete.addEventListener("click", function () {
      import("./clientApi.js").then(({ deleteClientItem }) => {

        deleteClient.spinner.style.display = "flex";
        setTimeout(function () {
          deleteClientItem(obj.id);
          document.querySelector(`[data-id='${obj.id}']`).remove();
          deleteClient.modalDelete.remove();
          document.querySelector(".modal-wrap").remove();
        }, 500);


        setTimeout(function () {
          deleteClient.spinner.style.display = "none";
        }, 500);
      });
    });
  });

  createForm.inputSurName.value = obj.surname;
  createForm.inputName.value = obj.name;
  createForm.inputLastName.value = obj.lastName;

  for (const contact of obj.contacts) {
    const createContacts = createContact();
    createContacts.contactTypeButton.textContent = contact.type;
    createContacts.contactInput.value = contact.value;
    createForm.contactsWrap.prepend(createContacts.contact);
  }
  //при изменение если контактов ==10 опять удалить кнопку
  if (obj.contacts.length === 10) {
    createForm.buttonAddContact.classList.remove("modal__button-add--active");
  }
  //при сохранении измененных данных сформировать новый обьект и отправить на сервер PATCH по id
  createForm.form.addEventListener("submit", async function (even) {
    even.preventDefault();
    const contactsType = document.querySelectorAll(".contact__type-button");
    const contactsValue = document.querySelectorAll(".contact__input");
    let contacts = [];
    let clientObj = {};
    const validClient = validateClient();
    const spinner = document.querySelector(".spinner");
    spinner.style.display = "flex";


    for (let i = 0; i < contactsType.length; i++) {
      if (!validateContact(contactsType[i], contactsValue[i])) {
         setTimeout(function() {spinner.style.display = "none";}, 500);
        return;
      } else {
        contacts.push({
          type: contactsType[i].textContent,
          value: contactsValue[i].value,
        });
      }
    }

    clientObj.surname = createForm.inputSurName.value;
    clientObj.name = createForm.inputName.value;
    clientObj.lastName = createForm.inputLastName.value;
    clientObj.contacts = contacts;
    

    try {
      
      if (!validClient) {
        return;
      } else {   
        const changeData = await sendClientObj(clientObj, "PATCH", obj.id);    
          document.querySelector(`[data-id='${changeData.id}']`).remove();        
          document
            .querySelector(".clients__tbody")
            .append(createStrClient(changeData).str);
          document.querySelector(".modal-wrap").remove();     
      }
    } catch (error) {
      createModalError(error);
    } finally {
        spinner.style.display = "none";
    }
  });

  //удалить окно изменения по клику вне модального
  window.addEventListener("click", function (even) {
    if (even.target === changeModal) {
      changeModal.remove();
    }
  });
  //убрать окно по клику на close кнопку
  createForm.buttonClose.addEventListener("click", function () {
    changeModal.remove();
  });

  changeModalContent.append(
    createForm.buttonClose,
    createForm.title,
    createForm.form
  );
  changeModal.append(changeModalContent);
  return {
    changeModal,
    changeModalContent,
  };
}
