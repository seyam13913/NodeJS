const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "10.0.0.241";

const myServer = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "./pages/home.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "./pages/about.html");
  } else if (req.url === "/profile") {
    handleReadFile(200, "./pages/profile.html");
  } else {
    handleReadFile(404, "./pages/error.html");
  }
});

myServer.listen(PORT, hostName, () => {
  console.log(`server is running at http://${hostName}:${PORT}`);
});
