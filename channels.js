const express = require('express')
const router = express.Router()
const conn = require('../mariadb')


router.use(express.json())  // http 외 모듈 'json'
let db = new Map()
var id = 1 //id라는 값을 하나의 객체를 특별하게 구별하기위함으로 사용






// 채널 전체 조회
router
    .route('/')
    .get((req, res) => {
        let {userId} = req.body
        
        let sql =  `SELECT * FROM channels WHERE user_id = ?`
       if(userId) {
        conn.query(sql, userId,
            function(err, results) {
                if (results.length) {
                   channels = results
                }
                else
                    notFoundChannel(res)
               }
         );
       } else {
            res.status(400).end()
       }
    }) 

    .post((req, res) => {
        const {name, userId} = req.body
        if (name && userId) {
          let sql = `INSERT INTO channels (name, user_id) VALUES (?, ?)`
            let values = [name, userId]
            conn.query(sql, values,
            function(err, results) {
                 res.status(201).json(results)
              }
         );
        } else {
            res.status(400).json({
                message: "요청 값을 제대로 보내주세요."
            })


        }
    }) // 채널 개별 생성 = db에 저장


////////////////////////같은 uRL가진애들 끼리 묶어놓음

router
    .route('/:id')
    .get((req, res) => {
        let {id} = req.params
        id = parseInt(id)

        let sql =  `SELECT * FROM channels WHERE id = ?`
        conn.query(sql, id,
            function(err, results) {
                if (results.length) 
                    res.status(200).json(results)
                else
                    notFoundChannel(res)
               }
         );
    }) 

    .put((req, res) => {
        let { id } = req.params
        id = parseInt(id)

        let channel = db.get(id)
        let oldTitle = channel.channelTitle

        if (channel) {

            let newTitle = req.body.channelTitle

            channel.channelTitle = newTitle
            db.set(id, channel)

            res.json({
                message: `채널명이 정상적으로 수정 됨. 기존 ${oldTitle}에서 -> 수정 ${newTitle}`
            })

        } else {
            notFoundChannel()
        }

    }) // 채널 개별 수정

    .delete((req, res) => {
        let { id } = req.params
        id = parseInt(id)

        let channel = db.get(id)

        if (channel) {
            db.delete(id)

            res.status(200).json({
                message: `${channel.channelTitle}이 정상적으로 삭제`
            })
        } else {
            notFoundChannel()
        }
    })// 채널 개별 삭제

function notFoundChannel(res) {
    res.status(404).json({
                message: "채널정보를 찾을수 없음"
            })
}


module.exports = router
