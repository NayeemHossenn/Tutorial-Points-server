const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Tutorial api is running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const AllCourses = courses.find((course) => course._id === id);
  res.send(AllCourses);
});

app.listen(port, () => {
  console.log("tutorial is working on port ", port);
});
