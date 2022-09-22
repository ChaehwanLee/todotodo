import React, {useState}from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoBoard from './component/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList]=useState([])
  
  const addItem =() => {
    console.log("value",inputValue)
    setTodoList([...todoList,inputValue])
  }
  const deleteItem =() =>{
    console.log("value",deleteValue)
    setTodoList([...todoList,deleteValue])
  }
  return (
      <main>
        <input value={inputValue}type="text" onChange=
        {(event)=>setInputValue(event.target.value)}/>
        <button onClick={addItem}>일정추가</button>
        <button onClick={deleteItem}>일정삭제</button>
        <TodoBoard todoList={todoList}/>
      </main>
  );
}

export default App;
