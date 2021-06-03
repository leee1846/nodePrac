const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server is running");
});
