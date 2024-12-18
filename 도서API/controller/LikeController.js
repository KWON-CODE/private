const ensureAuthorization = require('../auth'); // 인증모듈
const jwt = require('jsonwebtoken');
const conn = require('../mariadb'); // db모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈
 /* 사용 안하는 코드 const dotenv = require('dotenv');
dotenv.config(); */

const addLike = (req, res) => {
     // 좋아요 추가
     
     const book_id = req.params.id; 

     let authorization = ensureAuthorization(req, res);

     if (authorization instanceof jwt.TokenExpiredError) {
         return res.status(StatusCodes.UNAUTHORIZED).json({
             "message" : "로그인 세션이 만료 되었습니다. 다시 로그인 하세요."
         });
     } else if (authorization instanceof jwt.JsonWebTokenError) {
         return res.status(StatusCodes.BAD_REQUEST).json({
             "message" : "잘못된 토큰입니다."
         });
      } else {
        let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
     let values = [authorization.id, book_id];
     conn.query(sql, values,
        (err, results) => {
         if (err) {
             console.log(err);
             return res.status(StatusCodes.BAD_REQUEST).end();
         }
         return res.status(StatusCodes.OK).json(results);
     })
    }  
};



const removeLike = (req,res) => {
    // 좋아요 취소
    const book_id = req.params.id;
    
    let authorization = ensureAuthorization(req, res);

     if (authorization instanceof jwt.TokenExpiredError) {
         return res.status(StatusCodes.UNAUTHORIZED).json({
             "message" : "로그인 세션이 만료 되었습니다. 다시 로그인 하세요."
         });
     } else if (authorization instanceof jwt.JsonWebTokenError) {
         return res.status(StatusCodes.BAD_REQUEST).json({
             "message" : "잘못된 토큰입니다."
         });
      } else {
        let sql = "DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?;";
    let values = [authorization.id, book_id];
    conn.query(sql, values,
       (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
  }


    
}

/* 사용 안하는 코드
// function ensureAuthorization(req, res) {

//     try {
//         let receivedJwt = req.headers["authorization"];
//         console.log("received jwt : ", receivedJwt);

//         let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY) 
//         console.log(decodedJwt);

//         return decodedJwt;  
    
//         // let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY) 
//         // console.log(decodedJwt);
    
//     } catch (err) {
//         console.log(err.name);
//         console.log(err.message);

//         return err;
//     }
// }; 사용 안하는 코드*/

module.exports = {
    addLike,
    removeLike
};