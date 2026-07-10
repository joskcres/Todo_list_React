import React from 'react'
import { AppUI } from './ApUI';
import { TodoProvider } from '../TodoContext';
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>

  )
}

export default App