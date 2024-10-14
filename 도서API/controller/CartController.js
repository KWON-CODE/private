const conn = require('../mariadb'); // db모듈
const {StatusCodes} = require('http-status-codes'); // status code 모듈

// 장바구니 담기
const addToCart = (req,res) => {
    const {book_id, quantity, user_id} = req.body;

    let sql = "INSERT INTO cartitems (book_id, quantity, user_id) VALUES (?, ?, ?);"
    let values = [book_id, quantity, user_id];
    conn.query(sql, values,
       (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
};

// 장바구니 아이템 목록 조회
const getCartItems = (req,res) => {
    const {user_id, selected} = req.body; // selected = [1, 3]

    let sql = `SELECT cartitems.id, book_id, title, summary, quantity, price 
                FROM cartitems LEFT JOIN books 
                ON cartitems.book_id = books.id
                WHERE user_id=? AND cartitems.id IN (?)`;
    let values = [user_id, selected]
        conn.query(sql, values, 
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            return res.status(StatusCodes.OK).json(results);
        })

};

//장바구니 아이템 삭제
const removeCartItem = (req,res) => {
    const {id} = req.params; // cartItemId

    let sql = "DELETE FROM cartitems WHERE id = ?";
    conn.query(sql, id,
       (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
}
module.exports = {
    addToCart,
    getCartItems,
    removeCartItem
}
