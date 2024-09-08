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
app.get('/youtubers', function (req, res) {
    
  //강의에서 날리고 // 
  /*db.forEach(function(youtuber) {
    console.log(youtuber)
  })*/

    /*var jsonObject = {} 
    db.forEach(function(value, key){
    jsonObject[key] = value
    }); 이부분을 아래처럼 수정*/

  
    /*var youtubers = {} 
      db.forEach(function(youtuber){
      jsonObject[youtuber.channelTitle] = youtuber
    });*/
    var youtubers = {} 
    db.forEach(function(value, key){
    youtubers[key] = value
  });

  res.json(youtubers)

  // forEach를 json으로 변환 Map to JSON에서 JSON.stringify() 메서드 사용 
  /*detail.forEach((value, key) => {jsonObject[key] = value});
  console.log(JSON.stringify(jsonObject))*/

   // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//
    /*console.log(db.set())
    console.log(db.values())*/  
    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    //res.json(db.values())
        
  })

app.get('/youtubers/:id', function (req, res) {
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
app.post('/youtubers', (req, res) => {
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

// 개별 유튜버 삭제
app.delete('/youtubers/:id', function(req, res) {
  let {id} = req.params
  id = parseInt(id)
  
  var youtuber = db.get(id)
  if (db.get(id) == undefined) {

    res.json({
      message : `요청하신 ${id}번은 없는 유튜버.`
    })
    
  } else {

    const channelTitle = youtuber.channelTitle
  db.delete(id)

  res.json({
    message : `${channelTitle}__님, 행복하세요.`
  })

  }


});

//전체 삭제 유튜버
app.delete('/youtubers', function (req, res) {
  
  var msg = ""
  //db에 값이 1개 이상이면 , 전체삭제
  if (db.size >= 1 ) { 

    db.clear()
  
    msg = "전체 유튜버가 삭제"

  } else { // 값이 없으면
      msg = "삭제할 유튜버가 없습니다."
  }

    res.json({
      message : msg

    })
  // 값이 없으면 , "삭제할 유튜버가 없습니다."
   
  })

  // 개별유튜버 수정
app.put('/youtubers/:id', function(req, res) {
    
  let {id} = req.params
  id = parseInt(id)
  
  var youtuber = db.get(id)
  var oldTitle = youtuber.channelTitle
  if (db.get(id) == undefined) {

    res.json({
      message : `요청하신 ${id}번은 없는 유튜버.`
    })
    
  } else {
    var newTitle = req.body.channelTitle
    
    youtuber.channelTitle = newTitle
    db.set(id, youtuber)
    res.json({
      message : `${oldTitle}님, 채널명이 ${newTitle}로 수정 되었습니다.`
  })

  }
  
})  

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/  


//채널 : https://www.youtube.com/@second180
        //채널 : https://www.youtube.com/@youngji_boxmedia
        //채널 : https://www.youtube.com/@paik_jongwon

        // 동영상 주소: https://www.youtube.com/watch?v=mSACOKgkc3U
        // 동영상 클릭 주소: https://www.youtube.com/watch?v=mSACOKgkc3U&t=220s
