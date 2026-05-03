const express = require("express");
const app = express();
const courseRoutes = require("./src/routes/course_Routes"); // وارد کردن مسیرها

app.use(express.json()); // برای اینکه سرور بتواند JSON را بفهمد

// استفاده از مسیرهای مربوط به دوره‌ها
// تمام مسیرهایی که در فایل courseRoutes هستند، با پیش‌وند /courses شروع می‌شوند
app.use("/courses", courseRoutes);

// app.post("/courses/users", (req, res) => {
//   res.send(req.body.price);
//   res.send(req.body.Stue);
//   res.send(req.body.price);
// });
app.post("/courses/users", (req, res) => {
  // همه داده‌ها را در یک قالب واحد جمع می‌کنیم
  const responseData = {
    price: req.body.price,
    stufe: req.body.Stufe, // حواستان به بزرگ/کوچک بودن حروف (Case-sensitivity) باشد
    anotherPrice: req.body.price,
  };

  // فقط یک بار پاسخ را ارسال می‌کنیم
  res.status(200).json(responseData);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
