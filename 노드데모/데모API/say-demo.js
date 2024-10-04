const express = require('express')
const app = express()

app.listen(1234)

app.get('/', function (req, res) {
    res.send('hello')
  })

  app.get('/hello', function (req, res) {
    res.send('안녕하세요.')
  })


  // GET 메소드로, '/bye' 날라오면 
  // 매개변수로 전달받은 콜백 함수를 호출한다 -> 서버에 셋팅 
  app.get('/bye', function (req, res) {
    res.send('안녕히 가세요.')
  })

