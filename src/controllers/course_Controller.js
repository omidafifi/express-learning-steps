export.
const findCourse = courses.find(
  (course) => course.id === Number(req.params.id),
);

if (!findCourse) {
  res.status(404).send("دوره مورد نظر یافت نشد.");
}

res.send(findCourse);
