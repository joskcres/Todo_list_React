import React from 'react'
import './TodoSearch.css'

function ToDoSearch({ searchValue,
  setSearchValue
}) {

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