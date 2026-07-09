import React from "react";
import {TodoIcon} from './TodoIcon'

function CompleteIcon ({onComplete, completed}){
    return (
            <TodoIcon 
            type = 'completar'
            color = {completed?'green':'grey'}
            onClick={onComplete}
            />
            
        )
}

export { CompleteIcon }