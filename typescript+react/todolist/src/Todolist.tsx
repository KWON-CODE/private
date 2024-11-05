import React, {useState} from "react";
import { Button, Form } from 'react-bootstrap';

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const Todolist : React.FC = () => {
    const title : string = "오늘 할 일";
    
    //구조 분해할당
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : '공부하기', isChecked : false},
        {id : 2, text : '잠자기', isChecked : false},
        {id : 3, text : '미팅하기', isChecked : false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

   
    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems)=>
            prevItems.map((item) =>
                item.id === itemId ? {...item, isChecked : !item.isChecked } : item
            )
        )
    }
    
    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([...todos, {id : Date.now(), text : newTodo, isChecked:false}]);
            setNewTodo('');
        }
    }

    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className= 'container'>
                <div>
                    <Form.Control size="lg" type="text" placeholder="Large text" />
                     <input type = "text"
                        placeholder='할일 입력'
                        style={{marginRight : '10px', writingMode : 'horizontal-tb'}}
                        onChange={(e)=> setNewTodo(e.target.value)}
                     />
                     <Button variant = "warning" onClick={addTodo}>추가</Button>
                     
                </div>
                <p></p>
                <div className="board">
                    <ul>
                    {
                    todos.map((todo, index) => (
                        <li key={todo.id}>
                            <input type = "checkbox"
                            onChange={()=>{
                                handleCheckedChange(todo.id);
                            }}></input>
                            <span>
                                {
                                    todo.isChecked ? 
                                    <del>{todo.text}</del>
                                    : <span>{todo.text}</span>
                                }
                                
                            </span>
                        </li>
                    ))
                }

{/* 데스 코드 지금 위의 코드를 길게 나열한 것
                    <li>{todos[0].text}</li>
                    <li>{todos[1].text}</li>
                    <li>{todos[2].text}</li> */}
                    </ul>
                </div>
           
            </div>
        </div>
       
    )
}

export default Todolist;