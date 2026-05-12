const mongoose = require("mongoose");

const userScheme = mongoose.model("users", {
  name: { type: String, require: true, minLengght: 3, maxLenght: 18 },
  username: {
    type: String,
    require: true,
    minLengght: 8,
    maxLenght: 15,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = userScheme;

//  { id: 1, bookeName: "۱۰ نمونه تست ولیخانی", price: "5,000,000" },
//   { id: 4, bookeName: "15 Übungen", price: "700,000" }
