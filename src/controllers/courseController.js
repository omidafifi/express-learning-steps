

const getCourseById = (req, res) => {
  const findCourse = courses.find(
    (course) => course.id === Number(req.params.id),
  );

  if (!findCourse) {
    return res.status(404).send("دوره مورد نظر یافت نشد.");
  }

  res.send(findCourse);
};

module.exports = {
  getCourseById,
};
