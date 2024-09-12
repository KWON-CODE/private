const express = require('express')
const router = express.Router()
//router.listen(4321)
router.use(express.json())  // http 외 모듈 'json'
let db = new Map()
var id = 1 //id라는 값을 하나의 객체를 특별하게 구별하기위함으로 사용






// 채널 전체 조회
router
    .route('/')
    .get((req, res) => {
       if(db.size) {
        let channels = []
        //console.log(db)
        db.forEach(function(value, key) {
            //channels[key] = value
            channels.push(value)
        })
        // console.log(channels[0])
        // console.log(channels[1])
        // console.log(channels[2])


        res.json(channels)
        res.status(200).json(channels)
    } else {
        res.status(404).json
        message : "채널이 존재하지 않는다."
    }
    }) // 채널 전체 조회


    .post((req, res) => {
        if (req.body.channelTitle) {
        db.set(id++, req.body)
        //const {channelTitle} = req.body

        res.status(201).json({
          //  message : `${channelTitle}님, 채널을 응원합니다!`
           message : `${db.get(id-1).channelTitle}채널을 응원합니다!`
        })
    } else {
        res.status(400).json({
            message : "요청 값을 제대로 보내주세요."
        })


    }
    }) // 채널 개별 생성 = db에 저장


////////////////////////같은 uRL가진애들 끼리 묶어놓음

//채널 개별 조회
router
    .route('/:id')
    .get((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channel = db.get(id)

        if (channel) {
            res.status(200).json(channel)
            
            
        } else {
            res.status(404).json({
                message : "채널정보를 찾을수 없음"
            })

        }
        //res.send("개별 조회")
    }) // 채널 개별 조회
   
    .put((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channel = db.get(id)
        let oldTitle = channel.channelTitle
        
        if (channel) {
            
            let newTitle = req.body.channelTitle

            channel.channelTitle = newTitle
            db.set(id, channel)

            res.json({
                message : `채널명이 정상적으로 수정 됨. 기존 ${oldTitle}에서 -> 수정 ${newTitle}`
            })
            
        } else {
            res.status(404).json({
               
            })

        }

    }) // 채널 개별 수정
    
    .delete((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let channel = db.get(id)

        if (channel) {
            db.delete(id)

            res.status(200).json({
                message : `${channel.channelTitle}이 정상적으로 삭제`
            })
        } else {
            res.status(404).json({
                message : "채널정보를 찾을수 없음"
            })

        }
    })// 채널 개별 삭제



module.exports = router
