const express = require("express");
const bodyParser = require("body-parser");
const usersModel = require("./models/users");
const registerValidator = require("./Validators/register");
require("./configs/db");

const app = express(); // server
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/users/register", async (req, res) => {
  const validationResult = registerValidator(req.body);

  if (validationResult !== true) {
    return res.status(422).json(validationResult);
  }

  let { name, username, email, age, password } = req.body;

  const result = await usersModel.create({
    name,
    email,
    username,
    age,
    password,
  });

  res.status(201).json({
    message: "New user create successfully",
    result,
  });
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});
