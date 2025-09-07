const express = require("express");
const app = express();

const PORT = 3000;

const courses = [
  {
    id: 1,
    name: "typeScript",
    price: 325,
  },
  {
    id: 2,
    name: "nodeJs",
    price: 231,
  },
  {
    id: 3,
    name: "react",
    price: 115,
  },
];
app.get("/courses/:id", (req, res) => {
  const course = courses.find((course) => course.id === Number(req.params.id));
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: "Course not found" });
  }
});

app.post("/courses", (req, res) => {
  res.status(201).send("Add a new course");
});

app.put("/courses/:id", (req, res) => {
  res.status(200).send("Update course details");
});

app.delete("/courses/:id", (req, res) => {
  res.status(200).send("Course removed successfully");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
