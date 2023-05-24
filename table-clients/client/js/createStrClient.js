import { editData, editTime, createContactsLink } from "./global.js";
import { deleteModal } from "./createDeleteModal.js";
import { changeClient } from "./changeClient.js";
import { spinnerSvg } from './svg.js';

export function createStrClient(obj) {

  const modalDeleteStr = deleteModal();
  const modalChangeStr = changeClient(obj);

  const str = document.createElement("tr");
  const id = document.createElement("td");
  const fio = document.createElement("td");
  const surnameSpan = document.createElement("span");
  const nameSpan = document.createElement("span");
  const lastNameSpan = document.createElement("span");
  const dataTimeCreated = document.createElement("td");
  const dataCreate = document.createElement("span");
  const timeCreate = document.createElement("span");
  const dataTimeChange = document.createElement("td");
  const dataChange = document.createElement("span");
  const timeChange = document.createElement("span");
  const contacts = document.createElement("td");
  const actions = document.createElement("td");
  const actionsDelete = document.createElement("button");
  const actionsChange = document.createElement("button");
  const spinnerChange = document.createElement('span');
  const spinnerDelete = document.createElement('span');

  str.classList.add("clients__item");
  id.classList.add("cell-offset-1", "item__cell", "item__id");
  fio.classList.add("item__cell", "item__fio");
  dataTimeCreated.classList.add("item__cell", "item__data-created");
  dataTimeChange.classList.add("item__cell", "item__data-change");
  contacts.classList.add("item__cell", "item__contacts");
  actions.classList.add("item__cell", "item__actions");
  dataCreate.classList.add("data-create-data");
  timeCreate.classList.add("data-create-time");
  dataChange.classList.add("data-change-data");
  timeChange.classList.add("data-change-time");
  actionsDelete.classList.add("btn", "item__button", "button-delete");
  actionsChange.classList.add("btn", "item__button", "button-change");
  spinnerChange.classList.add('actions__spinner');
  spinnerDelete.classList.add('actions__spinner');

  spinnerChange.innerHTML = spinnerSvg;
  spinnerDelete.innerHTML = spinnerSvg;

   
  id.textContent = obj.id;
  str.setAttribute('data-id', obj.id);
  surnameSpan.textContent = obj.surname;
  nameSpan.textContent = obj.name;
  lastNameSpan.textContent = obj.lastName;
  actionsChange.textContent = "Изменить";
  actionsDelete.textContent = "Удалить";
  dataCreate.textContent = editData(obj.createdAt);
  timeCreate.textContent = editTime(obj.createdAt);

  dataChange.textContent = editData(obj.updatedAt);
  timeChange.textContent = editTime(obj.updatedAt);



  fio.append(surnameSpan, nameSpan, lastNameSpan);
  dataTimeCreated.append(dataCreate, timeCreate);
  dataTimeChange.append(dataChange, timeChange);
  actionsChange.append(spinnerChange);
  actionsDelete.append(spinnerDelete);

  actions.append(actionsChange, actionsDelete);
  str.append(id, fio, dataTimeCreated, dataTimeChange, contacts, actions);

  for (const contact of obj.contacts) {
    createContactsLink(contact.type, contact.value, contacts);
  }
//функция удалить клиента по id из дом и из сервера
  function deleteStrId() {
    import("./clientApi.js").then(({ deleteClientItem }) => {
      modalDeleteStr.modalButtonDelete.addEventListener("click", function () {
        modalDeleteStr.spinner.style.display = 'flex';
          deleteClientItem(obj.id);
          document.querySelector(`[data-id='${obj.id}']`).remove();
          modalDeleteStr.modalDelete.remove();
          modalDeleteStr.spinner.style.display = 'none'; 
      });
    });
  }

  actionsDelete.addEventListener("click", function () {
    spinnerDelete.style.display = 'flex';
    actionsDelete.classList.add('await-spinner');
        deleteStrId();
    document.body.append(modalDeleteStr.modalDelete);
    actionsDelete.classList.remove('await-spinner');
    spinnerDelete.style.display = 'none';
  });

  actionsChange.addEventListener("click", function () {
    spinnerChange.style.display = 'flex';
    actionsChange.classList.add('await-spinner');
      document.body.append(modalChangeStr.changeModal);
      spinnerChange.style.display = 'none';
    actionsChange.classList.remove('await-spinner');
  });

  return {
    str,
    actionsChange,
    actionsDelete,
  };
}
