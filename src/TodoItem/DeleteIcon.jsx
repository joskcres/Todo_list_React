import React from "react";
import {TodoIcon} from './TodoIcon'


function DeleteIcon({onDelete}) {
    return (
        <TodoIcon 
        type = 'eliminar'
        color = 'grey'
        onClick={onDelete}
        />
    )
}

export { DeleteIcon }