const express = require('express')
const app = express()

app.listen(1234)

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
