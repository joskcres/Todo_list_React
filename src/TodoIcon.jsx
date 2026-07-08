import CheckIcon from './check.svg?react'
import DeleteIcon from './delete.svg?react'
const iconTypes = {
    "completar": <CheckIcon width='20px' />,
    "eliminar": <DeleteIcon width='20px' />
}

function TodoIcon({ type }) {
    return <span className={`${type}`}>
        {iconTypes[type]}
    </span>
}
export { TodoIcon }