const express = require("express");
const PORT = 3000;
const app = express(); //()

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("home about");
});
app.get("/articles", (req, res) => {
  res.send("home articles");
});
app.get("/user", (req, res) => {
  res.send("home user");
});

app.listen(PORT, () => {
  console.log("app run on Port 3000");
});
