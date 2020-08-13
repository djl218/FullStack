import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notificaton from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notificaton />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App