import React from 'react'
import { ToDoCounter } from '../TodoCounter'
import { ToDoSearch } from '../TodoSearch'
import { ToDoList } from '../TodoList'
import { ToDoButton } from '../TodoButton'
import { ToDoItem } from '../TodoItem'
import { useLocalStorage } from './useLocalStorage'

function App() {

  const [todos, saveTodos] = useLocalStorage('TODO_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodo = todos.filter(todo => todo.completed).length;

  const totalTodos = todos.length

  const searchedTodo = todos.filter((todo) => {
    return todo.texto.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.texto == texto)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.texto == texto)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
      <ToDoCounter completed={completedTodo} total={totalTodos} />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedTodo.map(todo => (
          <ToDoItem key={todo.texto} texto={todo.texto} completed={todo.completed} onComplete={() => completeTodo(todo.texto)} onDelete={() => deleteTodo(todo.texto)} />
        ))}
      </ToDoList>

      <ToDoButton />
    </React.Fragment>
  )
}

export default App