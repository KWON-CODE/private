const express = require('express')
const app = express()
app.listen(1234)

const fruits = [
    {id : 1, name : 'apple'},
    {id : 2, name : 'banana'},
    {id : 3, name : 'orange'},
    {id : 4, name : 'blueberry'}
]
// 과일 전체 조회
app.get('/fruits', function (req, res) {
   /* var fruits = {} 
    db.forEach(function(value, key){
    fruits[key] = value
  }); */

  res.json(fruits)



})
 // 과일 개별 조회
 app.get('/fruits/:id', (req, res) => {
    let id = req.params.id
    // find함수 자바스크립트에서 배열에서 사용한다.배열에서 어떤 값을 찾을때 
    let findFruit = 
        fruits.find(f => (f.id == id))
        // fruits 배열 안에 있는 객체 중, id 값이 params.id랑 같은 객체
    
        if(findFruit)
            res.json(findFruit)
        else // 예외를 터트린다 = http status code 성공 x 실패!
            res.status(404).json({
                message : "CANNOT GET /TEST 전달 받은 ID로 저장된 과일이 없음"
 })

    // fruits.forEach(function(fruit) {
    //     if (fruit.id == id) {
    //         findFruit = fruit


    //     }

    // })
    
    
    //let fruit = fruits[id-1]
    res.json(findFruit) // json array

  }) 