const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  filterByQuery,
  deleteNote,
  createNewNote,
  validateNote,
} = require("../../lib/notes.js");
let { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.delete("/notes/:id", (req, res) => {
  const result = deleteNote(req.params.id, notes);
  notes = result;
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = uuidv4();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
