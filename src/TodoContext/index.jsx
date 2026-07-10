import React from 'react';
const TodoContext = React.createContext()
import { useLocalStorage } from './useLocalStorage';

function TodoProvider({ children }) {
    const { item: todos,
        saveItems: saveTodos,
        loading,
        error } = useLocalStorage('TODO_V1', []);
console.log(todos)
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
        <TodoContext.Provider value={{
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            completedTodo,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext }