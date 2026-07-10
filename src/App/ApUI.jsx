import React from 'react'
import { ToDoCounter } from '../TodoCounter'
import { ToDoSearch } from '../TodoSearch'
import { ToDoList } from '../TodoList'
import { ToDoButton } from '../TodoButton'
import { ToDoItem } from '../TodoItem'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'

function AppUI() {
    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch
            />
            <TodoContext.Consumer>
                {({
                    searchedTodo,
                    completeTodo,
                    deleteTodo,
                    loading,
                    error}) => (
                    <ToDoList>
                        {loading &&
                            <>
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                            </>
                        }
                        {error && <TodosError />}
                        {(!loading && searchedTodo.length <= 0) && <EmptyTodos />}

                        {searchedTodo.map(todo => (
                            <ToDoItem key={todo.texto} texto={todo.texto} completed={todo.completed} onComplete={() => completeTodo(todo.texto)} onDelete={() => deleteTodo(todo.texto)} />
                        ))}
                    </ToDoList>)}
            </TodoContext.Consumer>


            <ToDoButton />
        </React.Fragment>
    )
}

export { AppUI }