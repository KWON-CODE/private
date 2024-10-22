var jwt = require('jsonwebtoken'); 

const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// 서버세팅: 포트넘버 1234
app.listen(process.env.PORT)

// GET + "/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
  var token = jwt.sign({foo : 'bar'}, process.env.PRIVATE_KEY);

  res.cookie("jwt", token, {
    httpOnly : true
  });
    res.send("토큰 발행 완료!");
   });

  // GET + "/jwt/decoded" : 토큰을 검증
app.get('/jwt/decoded', function (req, res) {
  let receivedJwt = req.headers["authorization"]
  console.log("우리가 req로 전달받은 jwt : ", jwt)
  var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);

  res.send(decoded);
})

