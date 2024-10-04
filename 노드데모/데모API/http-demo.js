let http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('hello NODE.JS');
    response.end();
}

http.createServer(onRequest).listen(1234);
// http 모듈에 createServer 함수에서 할일을 다 한 다음에
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던진것.