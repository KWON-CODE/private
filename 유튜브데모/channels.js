const express = require('express')
const router = express.Router()
const conn = require('../mariadb')
const {body, param, validationResult} = require('express-validator')


router.use(express.json())  

const validate = (req, res) => {
    const err = validationResult(req)

    if (!err.isEmpty()) {
        return res.status(400).json(err.array())
    }
}


router
    .route('/')
    .get(
        [body('userId').notEmpty().isInt().withMessage("userId는 숫자로만!"),
            validate    
        ]
        ,(req, res) => {
        let {userId} = req.body
        
        let sql =  `SELECT * FROM channels WHERE user_id = ?`
         conn.query(sql, userId,
            function(err, results) {
                if(err){
                    console.log(err)
                    return res.status(400).end();
                }
                
                if (results.length) 
                   res.status(200).json(results)
                 else
                    notFoundChannel(res)
               }
         );
    }) 

    .post(
         [body('userId').notEmpty().isInt().withMessage("userId는 숫자로만!"), 
         body('name').notEmpty().isString().withMessage('문자입력 필요')]
            , (req, res) => {
            const err = validationResult(req)

            if (!err.isEmpty()) {
                return res.status(400).json(err.array())
            }

        const {name, userId} = req.body
        
          let sql = `INSERT INTO channels (name, user_id) VALUES (?, ?)`
            let values = [name, userId]
            conn.query(sql, values,
            function(err, results) {
                if(err){
                    console.log(err)
                    return res.status(400).end();
                }
                res.status(201).json(results)
              }
         );
         
            

    }) // 채널 개별 생성 = db에 저장


////////////////////////같은 uRL가진애들 끼리 묶어놓음

router
    .route('/:id')
    .get(
        param('id').notEmpty().withMessage('채널ID 필요')
        , (req, res) => {
            const err = validationResult(req)

            if (!err.isEmpty()) {
                return res.status(400).json(err.array())
            }

            let {id} = req.params
            id = parseInt(id)

            let sql =  `SELECT * FROM channels WHERE id = ?`
            conn.query(sql, id,
                function(err, results) {
                    if(err){
                        console.log(err)
                        return res.status(400).end();
                    }
                    
                    if (results.length) 
                        res.status(200).json(results)
                    else
                        notFoundChannel(res)
                }
            );
    }) 

    .put(
        [param('id').notEmpty().withMessage('채널ID 필요'),
        body('name').notEmpty().isString().withMessage('채널명 오류')]
        , (req, res) => {
            const err = validationResult(req)

            if (!err.isEmpty()) {
                return res.status(400).json(err.array())
            }

        let { id } = req.params
        id = parseInt(id)
        let {name} = req.body

        let sql =  `UPDATE channels SET name=?
                     WHERE id=?`
        let values = [name, id]

        conn.query(sql, values,
            function(err, results) {
                if(err){
                    console.log(err)
                    return res.status(400).end();
                }
                    if (results.affectedRows == 0) {
                        return res.status(400).end();
                    } else {
                        res.status(200).json(results)
                    }

            }
        );


    }) // 채널 개별 수정

    .delete(
        param('id').notEmpty().withMessage('채널ID 필요')
        ,(req, res) => {
            const err = validationResult(req)

            if (!err.isEmpty()) {
                return res.status(400).json(err.array())
            }

        let { id } = req.params
        id = parseInt(id)

        let sql = `DELETE FROM channels WHERE id = ?`
        conn.query(sql, id,
            function(err, results) { 
                if(err){
                    console.log(err)
                    return res.status(400).end();
                }

                if (results.affectedRows == 0) {
                    return res.status(400).end();
                } else {
                    res.status(200).json(results)
                }  
           }
         );

    })// 채널 개별 삭제

function notFoundChannel(res) {
    res.status(404).json({
                message: "채널정보를 찾을수 없음"
            })
}


module.exports = router
