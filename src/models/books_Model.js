const mongoose = require("mongoose");

const booksModel = mongoose.model(
  "books",
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    author: { type: String, required: true },
    description: { type: String },
    genre: { type: [String], default: [] },
    publishYear: { type: Number, min: 1000, max: 2030 },
    pages: { type: Number, min: 1 },
    price: { type: Number, min: 0 },
    language: { type: String, default: "fa" },
    isbn: { type: String, unique: true, sparse: true }, //شناسه بین المللی کتاب
  },
  { timestamps: true }, //زمان ایجاد و آپدیت
);
module.exports = booksModel;
