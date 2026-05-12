const express = require("express");
const connectDB = require("./src/config/mongoConnect");
const userModel = require("./src/models/users_Model");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = 4000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
