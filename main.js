/* 2021.12.07 server & client
const http = require('http'); // http 코어모듈 사용

let server = http.createServer(function(request, response) { //createServer(); 서버 역할을 하는 객체 하나 생성
response.end('<h1>Hello world!</h1>'); //서버 객체가 클라이언트 요청을 받을 시 응답할 내용 설정
});

server.listen(3000); //서버 객체가 외부 요청 받아들임 3000:포트번호
*/