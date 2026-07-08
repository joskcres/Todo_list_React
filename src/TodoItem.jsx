import {CompleteIcon} from './CompleteIcon.jsx'
import {DeleteIcon} from './DeleteIcon.jsx'

import './estilos/TodoItem.css'

function ToDoItem(props) {
  return (
    <li className={`${props.completed?'terminado':''}`}>
      <CompleteIcon onClick={props.onComplete}/>
      <p className={`${props.completed ? "marcado" : ""}`}>{props.texto}</p>
      <DeleteIcon onClick={props.onDelete}/>
    </li>
  );
}

export { ToDoItem }