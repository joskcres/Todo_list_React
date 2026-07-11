import './TodoButton.css'
import React from 'react';
import { TodoContext } from '../TodoContext';

function ToDoButton(){
    const {openModal, setOpenModal}= React.useContext(TodoContext)
    return(
        <button className='btn-Crear' onClick={(event)=>{
            if(!openModal){
                setOpenModal(true)
            }else{
                setOpenModal(false)
            }
        }}>+</button>
    )
}

export {ToDoButton}