import React from 'react';
import { TodoContext } from '../TodoContext';
import './Modal.css'
function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const OnChange = (event)=>(
        setNewTodoValue(event.target.value)
    )
 
    return (
        <div className="ModalOverlay">
            <form className="ModalContainer" onSubmit={onSubmit}>
                <h2 className="ModalTitle">Crear nuevo Todo</h2>
                <input
                    type="text"
                    className="ModalInput"
                    placeholder="Escribe tu tarea..."
                    value={newTodoValue}
                    onChange={OnChange}
                />
                <div className="ModalButtons">
                    <button
                        type="reset"
                        className="BtnClose"
                        onClick={onCancel}
                    >
                        Cerrar
                    </button>
                    <button type="submit" className="BtnCreate">
                        Crear
                    </button>
                </div>
            </form>
        </div>
    )
}

export { TodoForm }