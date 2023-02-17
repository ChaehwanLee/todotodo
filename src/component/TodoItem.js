// import React from "react"

// function TodoItem(props){

//     return(
//         <div className="todo-item">
//             {props.item}
//         </div>
//     )

// }

// export default TodoItem

import React from 'react';

function TodoItem(props) {
  return (
    <>
      <span className="todo-item">{props.item.title}</span>&nbsp;
      <button onClick={props.onDelete}>Delete Task</button>
      <br />
    </>
  );
}

export default TodoItem;
