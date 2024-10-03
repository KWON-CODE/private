// express 모듈
const express = require('express');
const app = express();

// dotenv
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
//유의미한 포트 번호 지정


const userRouter = require('./routes/users');

app.use("/", userRouter);
