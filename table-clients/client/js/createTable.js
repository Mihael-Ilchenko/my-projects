import { modalAddClient } from "./modalAddClient.js";
import { createPreloader } from "./global.js";
import { svgButton, arrowDown, arrowUp } from "./svg.js";

export function createTable() {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const tableWrapper = document.createElement("div");
  const title = document.createElement("h1");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const strThead = document.createElement("tr");
  const strTbody = document.createElement("tr");
  const buttonSortId = document.createElement("button");
  const buttonSortName = document.createElement("button");
  const buttonSortDataCreate = document.createElement("button");
  const buttonSortDataChange = document.createElement("button");
  const theadCellId = document.createElement("th");
  const theadCellName = document.createElement("th");
  const theadCellDataCreat = document.createElement("th");
  const theadCellDataChange = document.createElement("th");
  const theadCellContacts = document.createElement("th");
  const theadCellActions = document.createElement("th");
  const buttonAddUser = document.createElement("button");
  const buttonAddUserSvg = document.createElement("span");
  const nameSpan = document.createElement("span");
  const dataCreateSpan = document.createElement("span");
  const dataChangeSpan = document.createElement("span");

  theadCellId.setAttribute("data-type", "id");
  theadCellName.setAttribute("data-type", "name");
  theadCellDataCreat.setAttribute("data-type", "create");
  theadCellDataChange.setAttribute("data-type", "change");
  section.classList.add("clients");
  container.classList.add("container");
  tableWrapper.classList.add("clients__wrapper");
  title.classList.add("clients__title");
  table.classList.add("clients__table");
  thead.classList.add("clients__thead");
  tbody.classList.add("clients__tbody");
  strThead.classList.add("clients__str-thead", "str-thead-info");
  strTbody.classList.add("clients__str-tbody");
  theadCellId.classList.add("cell-thead", "sort", "str-thead-info__id");
  theadCellName.classList.add("cell-thead", "sort", "str-thead-info__name");
  theadCellDataCreat.classList.add(
    "cell-thead",
    "sort",
    "str-thead-info__data-creat"
  );
  theadCellDataChange.classList.add(
    "cell-thead",
    "sort",
    "str-thead-info__data-change"
  );
  theadCellContacts.classList.add("cell-thead", "str-thead-info__contacts");
  theadCellActions.classList.add("cell-thead");
  buttonAddUser.classList.add("btn", "clients__button");
  buttonAddUserSvg.classList.add("button__svg");
  buttonSortId.classList.add("btn", "thead-button", "thead-button-id");
  buttonSortName.classList.add("btn", "thead-button", "button-name");
  buttonSortDataCreate.classList.add(
    "btn",
    "thead-button",
    "button-data-create"
  );
  buttonSortDataChange.classList.add(
    "btn",
    "thead-button",
    "button-data-change"
  );

  nameSpan.classList.add("name-span");
  dataCreateSpan.classList.add("data-create-span");
  dataChangeSpan.classList.add("data-change-span");

  title.textContent = "Клиенты";
  buttonSortName.innerHTML = `Фамилия Имя Отчество${arrowDown}`;
  buttonSortDataCreate.textContent = "Дата и время ";
  buttonSortDataChange.textContent = "Последние ";
  theadCellContacts.textContent = "Контакты";
  theadCellActions.textContent = "Действия";
  buttonAddUser.textContent = "Добавить клиента";
  nameSpan.textContent = "а-я";
  dataCreateSpan.innerHTML = `создания${arrowDown}`;
  dataChangeSpan.innerHTML = `изменения${arrowDown}`;

  buttonAddUser.type = "button";
  buttonAddUserSvg.innerHTML = svgButton;
  buttonAddUser.prepend(buttonAddUserSvg);
  buttonAddUser.addEventListener("click", function () {
    document.body.append(modalAddClient());
  });
  buttonSortId.innerHTML = `id${arrowUp}`;

  buttonSortId.ariaLabel = "сортировать по id";
  buttonSortName.ariaLabel = "сортировать по фио";
  buttonSortDataCreate.ariaLabel = "сортировать по дате создания";
  buttonSortDataChange.ariaLabel = "сортировать по дате изменения";

  buttonSortName.append(nameSpan);
  buttonSortDataCreate.append(dataCreateSpan);
  buttonSortDataChange.append(dataChangeSpan);

  section.append(container);
  container.append(title, tableWrapper);
  tableWrapper.append(table);
  container.append(buttonAddUser);
  tbody.append(createPreloader());

  table.append(thead, tbody);
  thead.append(strThead);
  strThead.append(
    theadCellId,
    theadCellName,
    theadCellDataCreat,
    theadCellDataChange,
    theadCellContacts,
    theadCellActions
  );

  theadCellId.append(buttonSortId);
  theadCellName.append(buttonSortName);
  theadCellDataCreat.append(buttonSortDataCreate);
  theadCellDataChange.append(buttonSortDataChange);
  theadCellId.addEventListener("click", function () {
    const svgArrow = document.querySelector(".thead-button-id > svg");
    svgArrow.classList.toggle("sort--active");
    

  });
  theadCellName.addEventListener("click", function () {
    const svgArrow = document.querySelector(".button-name > svg");
    svgArrow.classList.toggle("sort--active");
  });

  theadCellDataCreat.addEventListener("click", function () {
    const svgArrow = document.querySelector(".button-data-create > span > svg");
    svgArrow.classList.toggle("sort--active");
  });

  theadCellDataChange.addEventListener("click", function () {
    const svgArrow = document.querySelector(".button-data-change > span > svg");
    svgArrow.classList.toggle("sort--active");
  });

  return {
    section,
    table,
    tbody,
    buttonAddUser,
  };
}
