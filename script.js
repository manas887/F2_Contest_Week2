const issuedBooks = [];

function addIssuedBook(bookName, issuedTo) {
  const id = issuedBooks.length + 1;
  const issuedTime = new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString(navigator.language, {hour : "2-digit", minute : "2-digit"});
  const status = "Not Returned";
  issuedBooks.push({ id, bookName, issuedTo, issuedTime, status });
  updateTable();
}

function updateTable() {
  const tableBody = document.querySelector("#issued-books tbody");
  tableBody.innerHTML = "";
  for (const book of issuedBooks) {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.bookName}</td>
      <td>${book.issuedTo}</td>
      <td>${book.issuedTime}</td>
      <td>${book.status}</td>`;
  }
}

const issueForm = document.querySelector("#issue-form");
issueForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = document.querySelector("#book-name").value;
  const issuedTo = document.querySelector("#issued-to").value;
  addIssuedBook(bookName, issuedTo);
  issueForm.reset();
});
