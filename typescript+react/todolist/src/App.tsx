import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Todolist';
import Clock from './Timer';

{/**
  작성자 : 누구
  작성일 : 언제
  내용 : 기능에 대한 내용
  */}

function App() {
  let name = "리액트"; 

  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );

  
}


// 자바스크립트 코드는 안좋다. 불편하다
// function App(){
//   return React.createElement("div", null, "hello, 리액트",
//   React.createElement("p", null, "반갑습니다.") );
// }

export default App;
