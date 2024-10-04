const express = require('express')
const app = express()

app.listen(1234)



  app.get('/products/:n', function(req, res) {
    // : <<이 나오면 node.js 입장에서 나한테 url로 매개변수를 전달해줄 건가 보다.
    // express는 req.params = url을 그대로 받아들이는게 아니라 어떤 변수가 올지 몰라서,변수이름을 뭐라지을지 몰라서 params안에 담아준 모든 값을 받아올거다.
    // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
    //console.log(req.params)
    //console.log(req.params.n)
    let number = parseInt(req.params.n) - 10
    console.log(number) // 숫자 vs "숫자"

    res.json({
        num : number

    })
    })


    app.get('/test/1', function(req, res) {

        res.json({
            num : req.params.n
    
        })
        })

        //채널 : https://www.youtube.com/@second180
        //채널 : https://www.youtube.com/@youngji_boxmedia
        //채널 : https://www.youtube.com/@paik_jongwon

        // 동영상 주소: https://www.youtube.com/watch?v=mSACOKgkc3U
        // 동영상 클릭 주소: https://www.youtube.com/watch?v=mSACOKgkc3U&t=220s
        app.get('/watch', function(req, res) {

          /* const q = req.query // q = {v:___ , t:_____}
           console.log(q)
           console.log(q.v)
           console.log(q.t)*/

            /*const {v, t} = req.query

            res.json({
               video : q.v,
               timeline : q.t
            
            })*/

               const {v , t} = req.query
               console.log(v)
               console.log(t)

               res.json({

                video : v,
                timeline : t

               })

   })


            
            /*app.get('/:nickname', function(req, res) {

                const param = req.params
    
                res.json({
                    channel : req.params.nickname
            
                })
                }) */