const fs = require("fs");
const path = require("path");

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    filteredResults = filteredResults.filter(
      (notes) => notes.title === query.title
    );
  }
  if (query.text) {
    filteredResults = filteredResults.filter(
      (notes) => notes.text === query.text
    );
  }

  return filteredResults;
}

function deleteNote(id, notesArray) {
  const result = notesArray.filter((notes) => notes.id !== id);
  //notesArray = result;
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: result }, null, 2)
  );
  return result;
}

function createNewNote(body, notesArray) {
  const notes = body;
  notesArray.push(notes);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notes;
}

function validateNote(notes) {
  if (!notes.title || typeof notes.title !== "string") {
    return false;
  }
  if (!notes.text || typeof notes.text !== "string") {
    return false;
  }
  return true;
}

module.exports = {
  filterByQuery,
  deleteNote,
  createNewNote,
  validateNote,
};
