/* 
1.자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다
2.자바스크립트 함수는 함수의 반환 값이 될 수 있다.
3.자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
4.자바스크립트 함수는 동일비교의 대상이 될 수 있다.
*/

 // 1.자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다
// function foo(arg) {
//     arg();
// }

// function bar() {
//     console.log('bar');
// }

// foo(bar);


// 2.자바스크립트 함수는 함수의 반환 값이 될 수 있다.

// function foo(arg) {
//  return arg;
// }

// function bar() {
//     console.log('bar');
// }

// foo(bar)(); // bar


// 3.자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 4.자바스크립트 함수는 동일비교의 대상이 될 수 있다.

// const foo = function (arg) {
//     return arg;
// };

// foo (1);


/*
1.기본 값 매개변수 default function parameter
2.나머지 매개변수 Rest parameter
3.arguments 객체
*/

// 1.기본 값 매개변수 default function parameter


// function foo(arg = 1) {
//     console.log(arg);
// }

// foo();

//2.나머지 매개변수 Rest parameter

// function foo(arg, ...rest) {
//     console.log(rest);
// }

// foo(1, 2, 3);


// 3.arguments 객체

// function foo(arg, ...rest) {
//     console.log(arguments);
// }

// foo(1, 2, 3, 4);





/*
 1. 함수 선언문
2. 함수 표현식
3. function 생성자 함수
4. 화살표 표현함수 
*/

// 1. 함수 선언문

// function foo() {
//     console.log ('foo')
// }

// foo();


//2. 함수 표현식

// const foo = function () {
//     console.log('foo2');
// }

// foo();

// 3. function 생성자 함수

// const foo = new Function("console.log('foo3')");
// foo();

//4. 화살표 표현함수 

// const foo = () =>{
//     console.log('foo4');
// }

// foo();

/*
1.IIFE (즉시생성함수)
2.재귀 함수
3.중첩함수
4.콜백함수
*/


// 1.IIFE (즉시생성함수)

// (function foo() {
//     console.log('foo');
// })()


// 2.재귀 함수

// function foo(arg) {
//     if(arg === 3) return;
//     console.log(arg)
//     foo(arg + 1);
// }

// foo(1); //함수 실행


// 3.중첩함수

// function foo(arg) {
//     function bar() {
//         console.log(arg);
//     }
//     bar();
// }
// foo(1);

// 4.콜백함수

function foo(arg) {
    arg();
}

foo(() => {
    console.log(1)
})
