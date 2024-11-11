const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');





// localhost:5555/fake/users
// 한명의 사용자 정보 생성
// email, password, fullName, contact
// app.get('/fake/users', function (req, res) {
//     res.status(200).json({
//         email : faker.internet.email(),
//         password : faker.internet.password(),
//         fullName : faker.person.fullName(),
//         contact : faker.phone.number()
//     })
// });

//req로 숫자를 받아서, 그 수 만큼 사용자 정보를 생성해주는 api
// 원하는 사용자 수만큼 가짜 데이터를 만들어주는 API로 수정해 보기

app.get('/fake/users/', function (req, res) {
    const {num} = req.query;

    let index = 1;
    let users = [];
    while (index<= num) {
        //
        users.push({
            email : faker.internet.email(),
            password : faker.internet.password(),
            fullName : faker.person.fullName(),
            contact : faker.phone.number()
        });
        index++;
    }
    res.status(200).json(users);
});

app.listen(5555);