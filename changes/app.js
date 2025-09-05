1; // نحوۀ تطابق مسیرها (path matching) تغییر کرده و اکنون امن‌تر شده: حذف regexهای تو در تو، نیاز به استفاده از ?, *, + و تغییر '/foo*' به '/foo(.*)'
// Express 4
app.get("/user*", (req, res) => res.send("User"));

// Express 5
app.get("/user(.*)", (req, res) => res.send("User"));

// Express 4
app.get("/:id(\\d+)", (req, res) => res.send(req.params.id));

// Express 5
// (regex inline حذف شده — پیشنهاد استفاده از کتابخانه اعتبارسنجی مثل joi)

2; //	مدیریت خطا برای async/await بهبود یافته: دیگر نیاز به try/catch یا next(err) نیست:
// Express 4
app.get("/data", async (req, res, next) => {
  try {
    const result = await fetchData();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// Express 5
app.get("/data", async (req, res) => {
  const result = await fetchData();
  res.send(result);
});

//	•	بازگشت app.router به همراه رفتار بهتر در Express 5 (در Express 3 بود، در 4 حذف شد).  ￼ ￼
// •	req.query اکنون فقط getter است و نوشتنی نیست.
// •	req.host اکنون شامل پورت در صورت وجود است.
// •	سایر تغییرات شامل express.urlencoded, express.static dotfiles, app.listen, req.body, res.clearCookie, res.status, res.var هستند.

//4 بهبودها (Improvements)
// •	res.render() بهبود یافته است.
// •	پشتیبانی از فشرده‌سازی Brotli اضافه شده است:

import compression from "compression";
app.use(compression({ brotli: { enabled: true } }));
