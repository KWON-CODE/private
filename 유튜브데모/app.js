const express = require('express')
const app = express()
app.listen(4321)

const userRouter = require('./youtube-demo/users') // user-demo 소환?
const channelRouter = require('./youtube-demo/channels') // channel 데모 소환?


app.use("/", userRouter)
app.use("/channels", channelRouter)


// 1. require('express') 모듈 사용  자바스크립트 내장된것 ,npm으로 설치 외부모듈 등

