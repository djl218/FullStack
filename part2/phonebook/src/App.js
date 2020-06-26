import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ searchResults, setSearchResults ] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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

  useEffect(() => {
    const personSearch = 
      persons.filter(person => person.name.toLowerCase().includes(newSearch)
      )   
    setSearchResults(personSearch);
  }, [persons, newSearch]);
  
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
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h3>add a new</h3>  
      <PersonForm addName={addName} newName={newName} handleNewName={handleNewName}
        newNumber={newNumber} handleNewNumber={handleNewNumber} 
      />
      <h3>Numbers</h3>
      <Persons searchResults={searchResults} />
    </div>
  )
}

export default App