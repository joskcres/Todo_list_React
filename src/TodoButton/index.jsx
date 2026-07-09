import './TodoButton.css'

function ToDoButton(){
    return(
        <button onClick={(event)=>{
            console.log('le diste click');
            console.log(event.target)
        }}>+</button>
    )
}

export {ToDoButton}