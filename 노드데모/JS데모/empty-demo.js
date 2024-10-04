const obj1 = {}
const obj2 = { message : "있다."}
 //const num = 1
const str1 = "one"
const str2 = "" // 문자열도 결국엔 객체이다.~


console.log(isEmpty(obj1)) // length === 0
console.log(isEmpty(obj2))// length === 1

 // 말이 안된다. console.log(Object.keys(num).length === 0)

 console.log(isEmpty(str1))
console.log(isEmpty(str2)) //문자열도 적용가능

function isEmpty(obj) {
    // 객체인지 확인해주는 문법 if (obj.constructor === Object)
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}