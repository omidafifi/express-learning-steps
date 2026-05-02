const express = require("express");
const app = express();
const courseRoutes = require("./routes/courseRoutes"); // وارد کردن مسیرها

app.use(express.json()); // برای اینکه سرور بتواند JSON را بفهمد

// استفاده از مسیرهای مربوط به دوره‌ها
// تمام مسیرهایی که در فایل courseRoutes هستند، با پیش‌وند /courses شروع می‌شوند
app.use("/courses", courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
