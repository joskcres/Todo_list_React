import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';

function ToDoCounter() {
 
    const {totalTodos, completedTodo}= React.useContext(TodoContext)
    return (
        <h1>
            {(totalTodos==completedTodo)&&totalTodos>0?'Felicitaciones completaste todas tus tareas!!!':totalTodos==0?
            'No tienes tareas en tu lista':`Has completado ${completedTodo} de ${totalTodos} TODOs`}
        </h1>
    )
}
export { ToDoCounter };