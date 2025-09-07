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

  res.send(course);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
