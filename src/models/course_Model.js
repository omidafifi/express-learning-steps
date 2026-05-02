const courses = [
  { id: 1, courseName: "Node.js Basic", price: "5,000,000" },
  { id: 4, courseName: "B2 German", price: "10,000,000" },
];

// وظیفه: فقط بگرد و پیدا کن
const findById = (id) => {
  return courses.find((course) => course.id === Number(id));
};

module.exports = { findById };
