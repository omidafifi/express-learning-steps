const Course = require("../models/course_Model");

const getCourseById = (req, res) => {
  const findCourse = Course.findById(req.params.id);

  if (!findCourse) {
    return res.status(404).send("دوره مورد نظر یافت نشد.");
  }
  res.send(findCourse);
};

module.exports = { getCourseById };
