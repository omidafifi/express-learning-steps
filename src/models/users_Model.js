const mongoose = require("mongoose");

const usersModel = mongoose.model("users", {
  name: { type: String, required: true, minLengght: 3, maxLenght: 18 },
  username: {
    type: String,
    required: true,
    minLengght: 8,
    maxLenght: 15,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
    required: false,
  },
});

module.exports = usersModel;
