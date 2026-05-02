const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course_Controller");

// مسیر: /courses/:id
// توجه: چون در app.js کلمه /courses را نوشتیم، اینجا فقط /:id می‌گذاریم
router.get("/:id", courseController.getCourseById);

module.exports = router;
