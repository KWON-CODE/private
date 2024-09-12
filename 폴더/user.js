// express 모듈 세팅
const express = require('express')
const router = express.Router()
// const app = express()
// app.listen(4321)

router.use(express.json())
//app.use(express.json()) // http 외 모듈 'json'

let db = new Map()
var id = 1 //id라는 값을 하나의 객체를 특별하게 구별하기위함으로 사용

//2. 로그인
// POST 쓰는이유 GET을 사용하면 URL로 데이터를 보내야하는데 개인정보가 노출된다.

router.post('/login', function(req, res){
    console.log(req.body) //1. userId,pwd id가 db에 저장된 회원인지
    //userId가 db에 저장된 회원인지... pwd도 맞는지 비교
    let loginUser = {}

    const {userId, password} = req.body
    db.forEach(function(user, id) {
        //a : 데이터   a:value = user위치
        //b : 인덱스   b:key   =id 위치
        //c : 객체    c:Map(통째로)
        console.log(user.userId)
        if (user.userId === userId) {
          loginUser = user

        } 
    })
   
    if (isExist(loginUser)) {
        console.log("같은 것")
         //pwd도 맞는지 비교
         if (loginUser.password === password) {
            console.log("패스워드 같다")
         } else {
            console.log("패스워드 틀렸다.")
         }
       

    } else {
        console.log('입력하신 아이디는 없는 아이디.')
    }
})

//내가짠코드의 의도를 이코드를 읽는 사람은 이해 못하기 때문에
//최대한 나의 도움없이 코드에 확신을 가질수 있게 해줘야한다.
// 이름을 예쁘게 지어서 함수로 빼주면된다.
function isExist(obj) {
    if (Object.keys(obj).length === 0) {
        return true
    } else {
        return false
    }
}


//1. 회원가입
router.post('/join', function(req, res) {
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

router
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
router.get('/users/:id',/* function(req, res) {
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

router.delete('/users/:id' /*, function(req, res) {

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

module.exports = router
