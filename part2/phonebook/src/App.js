import React, { useState, useEffect } from 'react'
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

  const personSearch = persons.filter(person => 
    person.name.toLowerCase().includes(newSearch.toLowerCase()))
 
  const addNameNumber = (name) => {
    const person = persons.find(n => n.name === name)
    const changedNumber = { ...person }

    if (persons.map(person => person.name).includes(newName)) {
      const confirmWindowForDuplicate = 
        window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      
      if (confirmWindowForDuplicate === true) {
        personService
          .update(name, changedNumber)
          .then((returnedPerson) => {
            setPersons(personSearch.map(person => person.name !== name ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })  
      } else {
        setPersons(personSearch)
        setNewName('')
        setNewNumber('')
      }
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

  const deleteNameNumberOf = (id) => {
    const person = persons.find(n => n.id === id)
    const confirmWindowForDel = window.confirm(`Delete ${person.name}?`)
    
    if (confirmWindowForDel === true) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(personSearch.filter(person => person.id !== id))
        })  
    } else {
      return personSearch
    }
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