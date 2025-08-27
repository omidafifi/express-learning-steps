const express = require("express");
const app = express();
const PORT = 3000;

// تعریف یک روت ساده
app.get("/", (req, res) => {
  console.log("Welcome to route /");
  res.send("<h1>Hello Express.js 🚀</h1>");
});

// مثال JSON
app.get("/api", (req, res) => {
  res.json({ message: "Hello from JSON endpoint!" });
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
