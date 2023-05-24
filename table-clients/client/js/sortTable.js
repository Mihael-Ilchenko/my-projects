export function sortTable() {
  const table = document.querySelector(".clients__table");
  const thead = table.querySelectorAll(".sort");
  const tbody = table.querySelector(".clients__tbody");

  const directions = Array.from(thead).map(() => "");

  [].forEach.call(thead, function (header, index) {
    header.addEventListener("click", function () {
      sortColumn(index);
    });
  });

  function transform(type, content) {
    switch (type) {
      case "id":
        return parseFloat(content);
      case "create":
      case "change":
        return content.split(".").reverse().join("-");
      case "name":
      default:
        return content;
    }
  }

  function sortColumn(index) {
    const type = thead[index].getAttribute("data-type");
    const rows = tbody.querySelectorAll("tr");
    const direction = directions[index] || "sortUp";
    const multiply = direction === "sortUp" ? 1 : -1;

    const newRows = Array.from(rows);
    newRows.sort((row1, row2) => {
      const cellA = row1.querySelectorAll("td")[index].textContent;
      const cellB = row2.querySelectorAll("td")[index].textContent;

      const a = transform(type, cellA);
      const b = transform(type, cellB);

      switch (true) {
        case a > b:
          return 1 * multiply;
        case a < b:
          return -1 * multiply;
        case a === b:
          return 0;
        default:
          break;
      }
    });

    [].forEach.call(rows, (row) => {
      tbody.removeChild(row);
      directions[index] = direction === "sortUp" ? "sortDown" : "sortUp";

      newRows.forEach((newRow) => {
        tbody.appendChild(newRow);
      });
    });
  }
}
