// models/courseModel.js

const courses = [
  { id: 1, courseName: "Node.js Basic", price: "5,000,000" },
  { id: 4, courseName: "B2 German", price: "10,000,000" },
];

// تابعی برای پیدا کردن یک دوره بر اساس آیدی
const findById = (id) => {
  return courses.find((course) => course.id === Number(id));
};

// صادر کردن توابع برای استفاده در کنترلر
module.exports = {
  findById,
  // اگر توابع دیگری مثل findAll یا create داشتید هم اینجا اضافه می‌کنید
};
