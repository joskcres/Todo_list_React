import CheckIcon from './check.svg?react'
import DeleteIcon from './delete.svg?react'
import './TodoIcon.css'
const iconTypes = {
    "completar": (color)=> <CheckIcon width='24px' fill={color} />,
    "eliminar": (color)=> <DeleteIcon width='24px' fill={color}/>
}

function TodoIcon({ type,color,onClick}) {
    return <span className={`${type}`} onClick={onClick}>
        {iconTypes[type](color)}
    </span>
}
export { TodoIcon }