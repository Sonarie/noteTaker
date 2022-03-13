//page that routes the user made notes to the notes page itself
const router = require("express").Router();
const path = require("path");

// router.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });

// router.post("/db", (req, res) => {
//   req.body.id = notes.length.toString();

//   if (!validateNote(req.body)) {
//     res.status(400).send("The note is not properly formatted.");
//   } else {
//     const note = createNewNote(req.body, notes);
//     res.json(note);
//   }
// });

module.exports = router;
