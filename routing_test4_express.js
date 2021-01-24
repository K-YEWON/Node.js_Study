//서드파티 모듈 express 사용하기
const http = require('http');

const express = require('express');

const app = express(); //express 모듈의 객체는 거의 app이라는 이름을 붙임

const users = ['Tom', 'Andy', 'Jessica', 'Paul']; // const

app.get('/', (request, response) => {
    response.end('<h1>Welcome!</h1>');
});

app.get('/users', (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (request, response) => {
    const userName = users[request.params.id - 1];
    response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
    response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);