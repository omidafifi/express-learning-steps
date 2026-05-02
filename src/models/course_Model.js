const courses = [
  { id: 1, courseName: "Node.js Basic", price: "5,000,000" },
  { id: 4, courseName: "B2 German", price: "10,000,000" },
];

const findById = (id) => {
  // تبدیل رشته به عدد و پیدا کردن در آرایه
  return courses.find((course) => course.id === Number(id));
};

module.exports = {
  findById,
};
