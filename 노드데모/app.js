const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.post('/test', (req, res) => {
   // body에 숨겨져서 들어온 데이터를 화면에 뿌려볼까?
   // postman이 해결해주신다 걱정말어라

   console.log(req.body.message)

  res.json(req.body) // <<body에 숨겨져서 들어온 데이터를 화면에 뿌려

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})