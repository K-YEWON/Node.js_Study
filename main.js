const http = require('http'); //http라는 코어모듈 사용 : 웹브라우저에서 맨앞에 붙는 주소 , 클라이언트가 웹브라우저와 통신을 할때 지켜야 할 규칙의 이름 - 통신규약(프로토콜)

let server = http.createServer(function(request, response){ // http객체에 createServer 메소드 호출
    response.end('<h1>Hello world!</h1>')
}); //request : 클라이언트 요청에 관한 객체 response : 서버 객체가 할 응답에 관한 객체
server.listen(3000);// server객체에 listen객체 호출(클라이언트의 요청에 응답 준비) 3000 : 포트번호(프로그램마다 상이)