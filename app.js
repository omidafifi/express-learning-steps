const express = require("express");
const PORT = 3000;
const app = express(); //()


app.get("/courses/:id", (req, res) => {
  const findCourse = courses.find(
    (course) => course.id === Number(req.params.id),
  );

  if (!findCourse) {
    res.status(404).send("دوره مورد نظر یافت نشد.");
  }

  res.send(findCourse);
});

// app.get("/about", (req, res) => {
//   res.send("home about");
// });
// app.get("/articles", (req, res) => {
//   res.send("home articles");
// });
// app.get("/user", (req, res) => {
//   res.send("home user");
// });

app.listen(PORT, () => {
  console.log("app run on Port 3000");
});
