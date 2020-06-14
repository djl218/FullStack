import React, { useState } from 'react'
//import Person from './components/Person'

const Person = (props) => {
  return (
      <div>{props.person.name}</div>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newName,
      date: new Date().toISOString(),
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div onSubmit={addPerson}>
          name: <input value={newName} onChange={handleNewName} />
        </div>  
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={persons.name} person={person} />
      )}      
    </div>
  )
}

export default App
