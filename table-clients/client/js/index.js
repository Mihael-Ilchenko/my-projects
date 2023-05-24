import { createHeader } from "./createHeader.js";
import { createTable } from "./createTable.js";
import { getClient } from "./clientApi.js";
import { createStrClient } from "./createStrClient.js";
import { sortTable } from "./sortTable.js";
import { searchClient } from "./searchClient.js";
import { createModalError } from './createModalError.js';

async function createApplication() {
  const header = createHeader();
  const table = createTable();
  const main = document.createElement("main");

  document.body.append(header, main);
  main.append(table.section);

  try {
    const clients = await getClient();
    searchClient(clients);
    for (const client of clients) {
      document
        .querySelector(".clients__tbody")
        .append(createStrClient(client).str);
    }
  } catch (error) {
    createModalError(error);
  } finally {
      document.querySelector(".preloader").remove();
  }
}

createApplication();

document.addEventListener("DOMContentLoaded", function () {
  sortTable();
  
});
