const path = require("path");
const router = require("express").Router();

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
