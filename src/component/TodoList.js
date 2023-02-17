// import React from "react"
// import TodoItem from "./TodoItem"

// function TodoBoard(props){

//     // console.log("todoBoard",props.todoList)
//     return (
//         <div>
//             <h1>Todo List</h1>
//             {props.todoList.map((item)=><TodoItem item={item}/>)}
//         </div>
//     )
// }

// export default TodoBoard

import React, { useState } from 'react';
import TodoItem from './TodoItem';

let nextId = 1;

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([{ id: 0, title: '삭제' }]);

  const addItem = () => {
    const newTask = {
      id: nextId++,
      title: inputValue,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteItem = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {tasks.map((item) => (
        <TodoItem item={item} onDelete={() => deleteItem(item.id)} />
      ))}
      <br />

      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>Add Task</button>
    </div>
  );
}

export default TodoList;
