//path(경로에)따라 다른 라우팅 해보기
const http =  require("http");

users = ['Tom', 'Andy', 'Jessica', 'Paul'];

let server = http.createServer(function (request, response){

    if(request.url === '/'){ //호스트 부분만 남겨도 '/' 자동으로 붙여줌 (중요) - main 페이지 url
        response.end('<h1>Welcome!<h1>');
    }else if(request.url === '/users'){ //회원목록 요청 url
        response.end('<h1>' + users + '</h1>');
    }else{ //준비되지 않은 url
        response.end('<h1>Page Not Available</h1>');
    }

});

server.listen(3000);