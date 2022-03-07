const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 4001;
const app = express();
const { notes } = require("./db/db");

app.use(express.static("public"));
app.use(express.json());

app.post('/db/db', (req, res) => {})


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
