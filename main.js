//간단한 웹서버 제작
const http = require("http");

let server = http.createServer(function (requrest, response) {
    response.end('<h1>Hello World!</h1>');
});

server.listen(3000);
