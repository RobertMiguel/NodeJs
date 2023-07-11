"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var url_1 = require("url");
var port = 8080;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var reqUrl = new url_1.URL("http://".concat(req.headers.host).concat(req.url));
    var queryParams = reqUrl.searchParams;
    var name = queryParams.get('name');
    res.end("Hello, ".concat(name || 'World', " !"));
});
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
