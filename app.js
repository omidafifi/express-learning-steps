const express = require("express");
const connectDB = require("./src/config/mongoConnect");
const usersModel = require("./src/models/users_Model");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 4000;
connectDB();

app.post("/api/user", (req, res) => {
  let { name, username, email, age } = req.body;

  if (!name || !username || !email || !age) {
    res.status(422).json({
      message: "Data is not valid",
    });
  } else {
    usersModel.create({ name, username, email, age });
  }
  res.status(201).json({
    message: "New user creat successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
