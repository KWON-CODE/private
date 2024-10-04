const express = require('express')
const app = express()

app.listen(1234)

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
            
app.get('/:nickname', function(req, res){

     const {nickname} = req.params
    
     if (nickname == "@second180") {
            res.json(youtuber1)
         }
    else if (nickname == "@paik_jongwon") {
        res.json(youtuber2)
    } 
    else if (nickname == "@youngji_boxmedia") {
        res.json(youtuber3)
    }
    else {
        res.json({
            message : "저희가 모르는 유튜버"
        })

    }

 }) 

       //채널 : https://www.youtube.com/@second180
        //채널 : https://www.youtube.com/@youngji_boxmedia
        //채널 : https://www.youtube.com/@paik_jongwon

        //동영상 주소: https://www.youtube.com/watch?v=mSACOKgkc3U
        // 동영상 클릭 주소: https://www.youtube.com/watch?v=mSACOKgkc3U&t=220s