import React from 'react'
import './estilos/TodoSearch.css'

function ToDoSearch({ searchValue,
  setSearchValue
}) {

  return (
    <input placeholder="Cortar Cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}></input>
  )
}

export { ToDoSearch };