import './TodoCounter.css'
function ToDoCounter({ total, completed }) {

    return (
        <h1>
            {(total==completed)&&total>0?'Felicitaciones completaste todas tus tareas!!!':total==0?
            'No tienes tareas en tu lista':`Has completado ${completed} de ${total} TODOs`}
        </h1>
    )
}
export { ToDoCounter };