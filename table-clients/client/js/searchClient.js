import { foundClient } from "./clientApi.js";
import { createStrClient } from "./createStrClient.js";

export function searchClient(clients) {
  const foundList = document.querySelector(".found-list");
  const input = document.querySelector(".header__input");
  clients.forEach((client) => {
    const foundItem = document.createElement("li");
    const foundLink = document.createElement("a");
    foundItem.classList.add("found-list__item");
    foundLink.classList.add("found-list__link");
    foundItem.tabIndex = 0;
    foundLink.textContent = `${client.surname} ${client.name} ${client.lastName}`;
    foundLink.href = "#";
    foundItem.append(foundLink);
    foundList.append(foundItem);
  });

  async function rewriteTbody(str) {
    const response = await foundClient(str);
    const tbody = document.querySelector(".clients__tbody");
    tbody.innerHTML = "";
    for (const client of response) {
       tbody.append(createStrClient(client).str);
    }
  }

  input.addEventListener("input", async function () {
    const value = input.value.trim();
    const foundLinks = document.querySelectorAll(".found-list__link");
    if (value !== '') {
      rewriteTbody(value);
      foundLinks.forEach(link => {
        if (link.innerText.search(value) == -1) {
          link.classList.add("hide");
          link.innerHTML = link.innerText;
        } 
         else {
           link.classList.remove("hide");
           foundList.classList.remove("hide");
           const str = link.innerText;
         }
      });
    } else {
      foundLinks.forEach(link => {
        const tbody = document.querySelector(".clients__tbody");
        tbody.innerHTML = "";
        clients.forEach(client => tbody.append(createStrClient(client).str));
        link.classList.remove("hide");
        foundList.classList.add("hide");
         link.innerHTML = link.innerText;
      })
    }
  });

}
