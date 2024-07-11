const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("Okay!!");
});

server.listen("3000", () => console.log("Start OK server"));