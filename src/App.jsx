import React from 'react'
import { ToDoCounter } from './TodoCounter'
import { ToDoSearch } from './TodoSearch'
import { ToDoList } from './TodoList'
import { ToDoButton } from './TodoButton'
import { ToDoItem } from './TodoItem'

const defaultTodo = [{ texto: "Ver a Messi en el mundial", completed: true },
{ texto: "acabar el curso de React", completed: false },
{ texto: 'Cortar Cebollas', completed: true },
{ texto: 'Armar legos', completed: false }]

function App() {
  const [todos, setTodos] = React.useState(defaultTodo);

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
    setTodos(newTodos)
  }

  const deleteTodo = (texto) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.texto == texto)
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
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