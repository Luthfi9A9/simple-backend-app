const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "Text/plain",
    });
    // content array format
    let contacts = JSON.stringify([
      { name: "Luthfi Alwan Azhari", phone: "0909090909" },
      { name: "Alwan Azhari", phone: "2929292929" },
      { name: "Azhari", phone: "1312312311" },
    ]);
    res.end(contacts);
  }
  // content html format
  else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Ini HTML</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
