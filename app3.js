const express = require("express");
const app = express();
const logger = require("./logger");
app.use(logger);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server is running");
});
