const Course = require('../models/courseModel'); // وارد کردن مدل

const getCourseById = (req, res) => {
  // استفاده از تابعی که در مدل تعریف کردیم
  const findCourse = Course.findById(req.params.id);

  if (!findCourse) {
    return res.status(404).send("دوره مورد نظر یافت نشد.");
  }

  res.send(findCourse);
};

module.exports = {
  getCourseById
};