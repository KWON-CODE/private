const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id', function (req, res) {
    
    let {id} = req.params
    console.log(id)
    id = parseInt(id)  
   // console.log(db.get(id)) undefined 떠서

    // res.json(db.get(id))

    if (db.get(id) == undefined) {
        res.json({
            message: "없는 상품입니다."

        })
    } else {
        product = db.get(id)
        product["id"] = id
        //product.id = id 방법1
        
        res.json(product)
    }    
}) 
 
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

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
console.log(db.get(4))