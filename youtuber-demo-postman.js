// express 모듈세팅

const express = require('express')
const app = express()
app.listen(1234)

// 데이터세팅

  let youtuber1 = {

    channelTitle : "180초",
    sub : "59.1만명",
    videoNum : "267개"

}

let youtuber2 = {

    channelTitle : "백종원",
    sub : "633만명",
    videoNum : "746개"

}

let youtuber3 = {

    channelTitle : "이영지",
    sub : "365만명",
    videoNum : "800개"

}

let db = new Map() // key - value = json
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))


//REST API 설계
app.get('/youtubers' , function (req, res) {
  res.json({
    message : "test"
  })

})
app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    
    const youtuber = db.get(id)
    if (youtuber == undefined) {
      res.json({
        message : "유튜버 정보를 찾을 수 없다."



      })

    } else {
    res.json(youtuber)
  }
  })


app.use(express.json()) //http 외 모듈인 '미들웨어' : json 설정
app.post('/youtuber', (req, res) => {
   // body에 숨겨져서 들어온 데이터를 화면에 뿌려볼까?
   // postman이 해결해주신다 걱정말어라

   console.log(req.body)
   // 등록..? Map(db)에 저장(put) 해야한다.
   db.set(id++, req.body)

  //res.json(req.body) // <<body에 숨겨져서 들어온 데이터를 화면에 뿌려
  res.json({
      message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다.`
  })
})


/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/  


//채널 : https://www.youtube.com/@second180
        //채널 : https://www.youtube.com/@youngji_boxmedia
        //채널 : https://www.youtube.com/@paik_jongwon

        // 동영상 주소: https://www.youtube.com/watch?v=mSACOKgkc3U
        // 동영상 클릭 주소: https://www.youtube.com/watch?v=mSACOKgkc3U&t=220s
