const express = require("express");
const app = express();
const port = process.env.port || 5000;

const categories = require("./data/category.json");

app.get("/", (req, res) => {
  res.send("Tutorial api is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("tutorial is working on port ", port);
});
