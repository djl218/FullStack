import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNameNumber = (event) => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const personSearch = persons.filter(person => 
    person.name.toLowerCase().includes(newSearch.toLowerCase()))

  console.log(persons)
  console.log(newSearch)
  
  const deleteNameNumberOf = (id) => {
    //console.log('person with id of ' + id + ' needs to be deleted')
    //const person = personSearch.find(n => n.id === id)
    personService
      .deletePerson(id)
      .then((deletedPerson => {
        setPersons(personSearch.map(person => person.id !== id ? person : deletedPerson))
      }))
  }
   
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h3>add a new</h3>  
      <PersonForm addNameNumber={addNameNumber} newName={newName} handleNewName={handleNewName}
        newNumber={newNumber} handleNewNumber={handleNewNumber} 
      />
      <h3>Numbers</h3>
      {personSearch.map((person) =>
        <Persons 
          key={person.id}
          person={person}
          deleteNameNumber={() => deleteNameNumberOf(person.id)} 
        />
      )}  
    </div>
  )
}

export default App