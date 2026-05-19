const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");
const path = require("path");
const viewsPath = require("./utils/viewsPath");

const teachersModel = require("./models/teacher");
const coursesModel = require("./models/course");

require("./configs/db");

const app = express(); // server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  // await teachersModel.create({
  //   fullname: "Mr. Ebadi",
  // });

  coursesModel.create({
    title: "Tailwind",
    teacher: "64be97a475059f65ceade0c3",
  });

  res.json({
    message: "New course added successfully :))",
  });

  // res.sendFile(path.join(viewsPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(viewsPath, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(viewsPath, "contact.html"));
});

app.use("/api/users/", usersRouter);
app.use("/api/books/", booksRouter);

app.use((req, res, next) => {
  // return res.status(404).sendFile(path.join(viewsPath, "404.html"));

  return res.status(404).json({
    error: {
      type: "Not Found",
      message: "404 test msg",
    },
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
