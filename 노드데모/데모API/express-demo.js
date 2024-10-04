const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// 서버세팅: 포트넘버 1234
app.listen(process.env.PORT)

// get + "/"
app.get('/', function (req, res) {
    res.send('hello')
  })
// API 테스트 method: GET + URL : "/"
app.get('/test', function (req, res) {
  res.send('TEST SUCCSESS')
})

//API : GET + "http://localhost:1234/test/1"
app.get('/test/1', function (req, res) {
    res.send('one!!!')
  })

  app.get('/hello', function (req, res) {
    res.send('안녕하세요.')
  })


  // GET 메소드로, '/bye' 날라오면 
  // 매개변수로 전달받은 콜백 함수를 호출한다 -> 서버에 셋팅 
  app.get('/bye', function (req, res) {
    res.send('안녕히 가세요.')
  })


  let nodejsBook = {

    title : "node.js를 공부해보자",
    price : 20000,
    description : "good"
    }


  app.get('/products/1', function(req, res) {
    res.json(nodejsBook)
   // res.send(20000)
  })