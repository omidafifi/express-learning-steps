const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("wellcom to rouat...");
  // res.send("<h1>Hello expressJS .....</h1>");
  // res.send({ message: "Hello (Json)" });
  res.send("hello express");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000 at http://localhost:3000");
});
