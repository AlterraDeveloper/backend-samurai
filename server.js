const http = require("http");
const fs = require("fs");

let requestsCount = 0;

const waitAsync = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const readFileAsync = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/favicon.ico":
      const data = await readFileAsync("favicon.ico");
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
      break;
    case "/home": {
      const html = await readFileAsync("pages/index.html");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(html);
      break;
    }
    case "/about": {
      const html = await readFileAsync("pages/about.html");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(html);
      break;
    }
    default:
      requestsCount++;
      res.write(`backend-samurai ${requestsCount} requests \n`);
      res.end();
  }
});

server.listen(3003);
