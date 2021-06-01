const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./nav"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is running");
});
