const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id', function (req, res) {
    
    /*const p = req.params
    console.log(p.id) 도 가능하지만*/
    let {id} = req.params
    console.log(id)
    id = parseInt(id)  // "숫자 -> 숫자"
    //console.log(db.get(id))
    
    if (db.get(id) == undefined) {
        res.json({
            message: "없는 상품입니다."

        })
    } else {
        res.json({
            id : id,
            productName : db.get(id)
        })
    }     
}) 
 
 
  /*res.json({
        id : id,
        productName : db.get(id)
    })
  })*/

// localhost:1234/1 NoteBook 뜨게
// localhost:1234/2 Cup 뜨게
// localhost:1234/3 Chair 뜨게

let db = new Map()

let notebook = {
    productName : "Notebook",
    price : 2000000
}

let cup = {
    productName : "Cup",
    price : 3000
}

let chair = {
    productName : "Chair",
    price : 100000
}

let poster = {
    productName : "Poster",
    price : 50000
}

db.set(1, notebook)
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)


/*db.set(1, "NoteBook") <<맵에 저장후 출력하려면 문자열 아니고 객체
db.set(2, "Cup")
db.set(3, "Chair")
db.set(4, "Poster")
//db.set("1", "KWON") */

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
console.log(db.get(4))

//console.log(db.get("1"))

 /*db.set(키, 벨류) // 키로 벨류를 찾을 수 있는 한쌍을 저장 */