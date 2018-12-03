const http = require("http");
let port = Math.round(1 + Math.random() * 1000);
console.log(`启动端口：` + port);
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
}).listen(port, '127.0.0.1');