const http =  require("http");
const { REPL_MODE_STRICT } = require("repl");

users = ['Tom', 'Andy', 'Jessica', 'Paul'];

let server = http.createServer(function (request, response){

   if(request.url === '/'){
       response.end('<h1>Welcome!</h1>');
   }else if(request.url === '/users'){
       response.end('<h1>' + users + '</h1>');
   }else if(request.url.split('/')[1] === 'users'){
       //url : /users/1, /users/2, ...
    let userIdx = request.url.split('/')[2];
    let userName = users[userIdx -1];
    console.log(userIdx);
    console.log(userName);

    response.end('<h1>' + userName + '</h1>');
    }else{
        response.end('<h1>Page Not Available</h1>');
    }

});

server.listen(3000);