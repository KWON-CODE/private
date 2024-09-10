// express 모듈 세팅
const express = require('express')
const app = express()
app.listen(4321)
app.use(express.json()) // http 외 모듈 'json'

let db = new Map()
var id = 1 //id라는 값을 하나의 객체를 특별하게 구별하기위함으로 사용

//2. 로그인

app.post('/login', function(req, res){



})

//1. 회원가입
app.post('/join', function(req, res) {
    console.log(req.body)
   
     
    if (req.body == {}) {
    
        res.status(400).json ({
            message : `입력 값을 다시 확인 부탁드립니다.`
        })

    } else {
        db.set(id++, req.body)
       
        res.status(201).json ({
        message : `${db.get(id-1).name}님 환영합니다.`
    })
    }  

})

app
    .route('/users/:id')
    .get(function(req, res) {
        let {id} = req.params
        id = parseInt(id)
    
        console.log(id)
    
        const user = db.get(id)
        if (user == undefined) {
            res.status(404).json({
                message : "회원 정보가 없습니다."
            })
    
        } else {
            res.status(200).json({
                userId : user.userId,
                name : user.name
    
            })
    
        }
    
    })
    .delete(function(req, res) {

        let {id} = req.params
        id = parseInt(id)
    
        console.log(id)
    
        const user = db.get(id)
        if (user == undefined) {
            res.status(404).json({
                message : "회원 정보가 없습니다."
            })
    
        } else {
            db.delete(id)
    
            res.status(200).json({
                message : `${user.name}님 다음에 뵐게요.`
    
            })
    
        }
    
    
    })

//회원 개별 조회
app.get('/users/:id',/* function(req, res) {
    let {id} = req.params
    id = parseInt(id)

    console.log(id)

    const user = db.get(id)
    if (user == undefined) {
        res.status(404).json({
            message : "회원 정보가 없습니다."
        })

    } else {
        res.status(200).json({
            userId : user.userId,
            name : user.name

        })

    }

}*/)



//회원 개별 탈퇴

app.delete('/users/:id' /*, function(req, res) {

    let {id} = req.params
    id = parseInt(id)

    console.log(id)

    const user = db.get(id)
    if (user == undefined) {
        res.status(404).json({
            message : "회원 정보가 없습니다."
        })

    } else {
        db.delete(id)

        res.status(200).json({
            message : `${user.name}님 다음에 뵐게요.`

        })

    }


}*/)
