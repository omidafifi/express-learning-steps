const Course = require("../models/courseModel");

const getCourseById = (req, res) => {
  const findCourse = Course.findById(req.params.id);

  // همان return حیاتی که درباره‌اش صحبت کردیم
  if (!findCourse) {
    return res.status(404).send("دوره مورد نظر یافت نشد.");
  }

  res.send(findCourse);
};

module.exports = {
  getCourseById,
};
