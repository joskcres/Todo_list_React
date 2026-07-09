import {CompleteIcon} from './CompleteIcon.jsx'
import {DeleteIcon} from './DeleteIcon.jsx'

import './TodoItem.css'

function ToDoItem(props) {
  return (
    <li className={`${props.completed?'terminado':''}`}>
      <CompleteIcon onComplete={props.onComplete} completed={props.completed}/>
      <p className={`${props.completed ? "marcado" : ""}`}>{props.texto}</p>
      <DeleteIcon onDelete={props.onDelete}/>
    </li>
  );
}

export { ToDoItem }