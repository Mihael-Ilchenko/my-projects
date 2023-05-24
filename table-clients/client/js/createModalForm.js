import { createContact } from "./createContact.js";
import { spinnerSvg } from './svg.js'

export function createModalForm() {

  const form = document.createElement("form");
  const title = document.createElement("h2");
  const buttonClose = document.createElement("button");
  const inputSurName = document.createElement("input");
  const inputName = document.createElement("input");
  const inputLastName = document.createElement("input");
  const labelSurName = document.createElement("label");
  const labelName = document.createElement("label");
  const labelLastName = document.createElement("label");
  const surNameRequired = document.createElement("span");
  const nameRequired = document.createElement("span");
  const lastNameRequired = document.createElement("span");
  const buttonAddContact = document.createElement("button");
  const buttonAddSpan = document.createElement("span");
  const buttonSave = document.createElement("button");
  const buttonCancel = document.createElement("button");
  const contactsWrap = document.createElement("div");

  const wrappInputSurname = document.createElement("div");
  const wrappInputName = document.createElement("div");
  const wrappInputLastName = document.createElement("div");

  const spinner = document.createElement('span');

  form.classList.add("modal");
  title.classList.add("modal__title");
  buttonClose.classList.add("btn", "modal__button-close");
  inputSurName.classList.add("modal__input", "input-surname");
  inputName.classList.add("modal__input", "input-name");
  inputLastName.classList.add("modal__input", "input-lastname");
  labelSurName.classList.add("modal__label", "label-surname");
  labelName.classList.add("modal__label", "label-name");
  labelLastName.classList.add("modal__label", "label-lastname");
  surNameRequired.classList.add(
    "modal__required",
    "required-surname",
    "modal__required--active"
  );
  nameRequired.classList.add(
    "modal__required",
    "required-name",
    "modal__required--active"
  );
  lastNameRequired.classList.add(
    "modal__required",
    "required-lastname",
    "modal__required--active"
  );
  buttonAddContact.classList.add(
    "btn",
    "modal__button-add",
    "modal__button-add--active"
  );
  buttonAddSpan.classList.add("button-add-decor");
  buttonSave.classList.add("btn", "modal__button-save");
  buttonCancel.classList.add("btn", "modal__button-cancel");
  contactsWrap.classList.add("modal__block");

  wrappInputSurname.classList.add("modal__input-wrapp");
  wrappInputName.classList.add("modal__input-wrapp");
  wrappInputLastName.classList.add("modal__input-wrapp");

  spinner.classList.add('spinner');

  inputSurName.type = "text";
  inputName.type = "text";
  inputLastName.type = "text";
  inputSurName.placeholder = "Фамилия";
  inputName.placeholder = "Имя";
  inputLastName.placeholder = "Отчество";

  title.textContent = "Новый клиент";
  buttonAddContact.textContent = "Добавить контакт";
  buttonSave.textContent = "Сохранить";
  buttonCancel.textContent = "Отмена";
  surNameRequired.textContent = "Фамилия";
  nameRequired.textContent = "Имя";
  lastNameRequired.textContent = "Отчество";

  spinner.innerHTML = spinnerSvg;

  //validate
  const containerError = document.createElement("p");
  const unacceptableMeaning = document.createElement("span"); //недопустимое значение
  const blankName = document.createElement("span");
  const blankSurname = document.createElement("span");
  const blankLastName = document.createElement("span");
  const requiredField = document.createElement("span");
  const requiredContacts = document.createElement("span");
  containerError.classList.add("error");
  unacceptableMeaning.classList.add("error__unacceptable-meaning");
  blankName.classList.add("error__blank-name");
  blankSurname.classList.add("error__blank-surname");
  blankLastName.classList.add("error__blank-lastname");
  requiredField.classList.add("error__required-field");
  requiredContacts.classList.add("error__required-contacts");
  containerError.append(
    unacceptableMeaning,
    blankSurname,
    blankName,
    blankLastName,
    requiredField,
    requiredContacts
  );

  labelSurName.append(inputSurName);
  labelName.append(inputName);
  labelLastName.append(inputLastName);
  labelSurName.append(surNameRequired);
  labelName.append(nameRequired);
  labelLastName.append(lastNameRequired);
  form.append(title, buttonClose, labelSurName, labelName, labelLastName);
  buttonAddContact.append(buttonAddSpan);
  contactsWrap.append(buttonAddContact);

    buttonSave.prepend(spinner);

  form.append(contactsWrap, containerError, buttonSave, buttonCancel);

  //при клике добавить контакт
  buttonAddContact.addEventListener("click", function (even) {
    even.preventDefault();
    const countContacts = document.getElementsByClassName("contact");

    if (countContacts.length < 9) {
      const createContactItem = createContact();
      buttonAddContact.before(createContactItem.contact);

      if (countContacts.length >= 6) {
         document.querySelector(".modal-content").style.top = '15%';
      } else {
        document.querySelector(".modal-content").style.top = '';
      }
    } else {
      const createContactItem = createContact();
      buttonAddContact.before(createContactItem.contact);
      buttonAddContact.classList.remove("modal__button-add--active");
    }
  });

  return {
    form,
    title,
    buttonClose,
    buttonCancel,
    inputSurName,
    inputLastName,
    inputName,
    labelSurName,
    labelName,
    labelName,
    labelLastName,
    contactsWrap,
    buttonAddContact,
  };
}
