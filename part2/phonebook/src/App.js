import React, { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = 
    useState([
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Ada Lovelace', number: '39-44-5323523'},
      { name: 'Dan Abramov', number: '12-43-234345'},
      { name: 'Mary Poppendieck', number: '39-23-6423122'}
    ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  const handleNewSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  React.useEffect(() => {
    const personSearch = 
      persons.filter(person => person.name.toLowerCase().includes(newSearch)
      )   
    setSearchResults(personSearch);
  }, [newSearch]);

  const addName = (event) => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <div>
          filter shown with <input value={newSearch} onChange={handleNewSearch}/>
        </div>
      <h1>add a new</h1>  
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>  
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {searchResults.map(person => (
        <Persons key={person.name} person={person} />
      ))}
    </div>
  )
}

export default App