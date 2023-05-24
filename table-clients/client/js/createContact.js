  import { typeButtonSvg } from './svg.js';

export function createContact() {
  
  const contact = document.createElement("div");
  const contactType = document.createElement("div");
  const contactTypeButton = document.createElement("button");
  const contactList = document.createElement("ul");
  const contactPhone = document.createElement("li");
  const contactVk = document.createElement("li");
  const contactFacebook = document.createElement("li");
  const contactEmail = document.createElement("li");
  const contactOther = document.createElement("li");
  const contactInput = document.createElement("input");
  const contactDelete = document.createElement("button");
  const contactWrap = document.createElement("div");

  contactOther.tabIndex = "0";
  contactEmail.tabIndex = "0";
  contactFacebook.tabIndex = "0";
  contactVk.tabIndex = "0";

  const contactDeleteTooltip = document.createElement("span");

  contact.classList.add("contact");
  contactType.classList.add("contact__type");
  contactTypeButton.classList.add("btn", "contact__type-button");
  contactList.classList.add("contact__list");
  contactPhone.classList.add("list-item", "contact__phone");
  contactVk.classList.add("list-item", "contact__vk");
  contactFacebook.classList.add("list-item", "contact__facebook");
  contactEmail.classList.add("list-item", "contact__email");
  contactOther.classList.add("list-item", "contact__other");
  contactInput.classList.add("contact__input");
  contactDelete.classList.add("btn", "contact__delete");
  contactDeleteTooltip.classList.add("tooltip", "contact__tooltip");
  contactWrap.classList.add("contact__wrapp");

  contactDelete.innerHTML = typeButtonSvg;

  contactTypeButton.textContent = "Телефон";
  contactDeleteTooltip.textContent = "Удалить контакт";
  contactPhone.textContent = "Телефон";
  contactVk.textContent = "Vk";
  contactFacebook.textContent = "FaceBook";
  contactEmail.textContent = "Email";
  contactOther.textContent = "Доп. телефон";
  contactInput.placeholder = "Введите данные контакта";
  contactInput.type = "text";

  contactDelete.append(contactDeleteTooltip);
  contactWrap.append(contactType, contactInput, contactDelete);
  contactType.append(contactTypeButton, contactList);
  contactList.append(contactPhone, contactOther, contactEmail, contactVk, contactFacebook);
  contact.append(contactWrap);

  //выпадающий список в контакте
  contactTypeButton.addEventListener("click", function (e) {
    e.preventDefault();
    contactList.classList.toggle("contact__list--active");
    contactTypeButton.classList.toggle("contact__type-button--active");
  });
  contactDelete.addEventListener("click", function (e) {
    e.preventDefault();
    contact.remove();
    document
      .querySelector(".modal__button-add")
      .classList.add("modal__button-add--active");
  });
  //закрыть при отсутствии hover
  contactType.addEventListener("mouseleave", function () {
    contactList.classList.remove("contact__list--active");
    contactTypeButton.classList.remove("contact__type-button--active");
  });
  //выбранный тип,текст из списка контактов вставить в кнопку
  function selectedType(type) {
    type.addEventListener("click", function () {
      contactTypeButton.textContent = type.textContent;
      contactList.classList.remove("contact__list--active");
      contactTypeButton.classList.remove("contact__type-button--active");
    });
  }
  //arr item list
  const arrItemsType = [
    contactVk,
    contactFacebook,
    contactEmail,
    contactOther,
    contactPhone,
  ];
  for (const type of arrItemsType) {
    selectedType(type);
  }

  return {
    contact,
    contactTypeButton,
    contactDelete,
    contactInput,
    contactWrap,
  };
}
