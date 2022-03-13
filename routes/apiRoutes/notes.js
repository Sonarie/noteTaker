const $notesForm = document.querySelector(".col-8");
const $cardArea = document.querySelector(".card");

const printResults = (resultArr) => {
  console.log(resultArr);

  const notesHTML = resultArr.map(({ id, title, text }) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${title}</h4>
      Note Text: ${text.join(", ")}</p>
    </div>
  </div>
    `;
  });

  $cardArea.innerHTML = notesHTML.join("");
};

const getNotes = (formData = {}) => {
  let queryUrl = "/api/notes?";

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  fetch(queryUrl)
    .then((response) => {
      if (!response.ok) {
        return alert("Error: " + response.statusText);
      }
      return response.json();
    })
    .then((noteData) => {
      console.log(noteData);
      printResults(noteData);
    });

  console.log(queryUrl);
};

const handleGetNotesSubmit = (event) => {
  event.preventDefault();
  const notes = { title, text };

  getNotes(notes);
};

$notesForm.addEventListener("submit", handleGetNotesSubmit);

getNotes();
