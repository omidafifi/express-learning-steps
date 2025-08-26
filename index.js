// first Nodejs Http Module
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

//  console.log("test fetch")
