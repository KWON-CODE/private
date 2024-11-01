// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'typescript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
//A extends B //B클래스를 A클래스에 상속하겠다
//A implements B // 그러나 인터페이스는 상속 확장의 개념이 아니라 구현의 개념이라 implements사용
// B라는 인터페이스를 A라는 클래스에 구현시키도록 하겠다.
var Mystudent = /** @class */ (function () {
    function Mystudent() {
        this.stdId = 91011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = 'male';
        this.course = 'scrpit';
        this.completed = true;
    }
    Mystudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return Mystudent;
}());
var myInstance = new Mystudent();
myInstance.setName('엘리스');
// function getInfo(id : number) : Student // {}안의 값 자체가 타입이 된다. - 인터페이스 이용
// {
//     return {
//         stdId : id,
//         stdName : 'lee',
//        // age : 20,
//          gender : 'female',
//         course : 'typescrpit',
//         completed : true
//     };
// }
var std = {
    stdId: 91011,
    stdName: 'park',
    age: 30,
    gender: GenderType.Male,
    course: 'scrpit',
    completed: true
};
function setInfo(student) {
    console.log(student);
}
//setInfo(std);
//console.log(getInfo(5687);)
//함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : void // 함수의 리턴타입
// {
//     return a + b;
// }
// const user : {name : string, age : number} = {
//     name : 'john'
//     age : 25
// }
// type strOrNum = number | string;
// // number | string이란 유니온타입을 strOrNum으로 재정의 하겠다.
// //타입 알리어스 사용 = 타입별칭 = 타입을 재정의
// // 타입이라는 키워드를 사용해서 그뒤에 이름짓기
// let numStr : strOrNum = '100';
// let item : number;
// function convertToString(val : strOrNum) : string{
//     if(typeof val === 'string') {
//         item = 0;
//     } else{
//         item = val;
//     }
//     // typeof operater 연산자 사용으로 문제해결
//     return String(val);
// } // 무조건 스트링으로 변환해서 리턴하는 함수
// function convertToNumber(val : number | string) : Number{
//     return Number(val);
// } //무조건 숫자로 변환해서 리턴하는 함수
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// let numbers = new Array([1,2,3,4,5]);↓ 아래와 동일
// let numbers : number[] = [1,2,3,4,5];
// let fruits : string[] = ['apple', 'banana', 'orange'];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// // 배열의 유니온 타입 확인
// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
// for(let i = 0; i < mixedArray.length; i++){
//     console.log(mixedArray[i]);
// }
// let infer = [1,2,3]; // 타입추론
// for (let i = 0;, i< infer.length; i++){
//     console.log(infer[i]);
// }
// 읽기전용 배열, 메소드
//let readOnlyArray : ReadonlyArray<number> = [1,2,3];
//튜플 : 타입의 순서가 정해져있다. 자바스크립트에서는 없는데이터타입
// let greeting : [number, string, boolean] = [1, 'hello', true];
// for(let i = 0; i < greeting.length; i++){
//     console.log(greeting[i]);
// }
// Spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
