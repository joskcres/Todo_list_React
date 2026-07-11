import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext'

function ToDoSearch() {
const { searchValue,setSearchValue} = React.useContext(TodoContext)
  
return (
    <input placeholder="Cortar Cebolla"
      id='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}></input>
  )
}

export { ToDoSearch };