import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import SuccessfulNotification from './components/SuccessfulNotification'
import UnsuccessfulNotification from './components/UnsuccessfulNotification'

import {
  Container,
  Typography,
  Box,
  AppBar,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper
} from '@material-ui/core'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ greenMessage, setGreenMessage ] = useState(null)
  const [ redMessage, setRedMessage ] = useState(null)

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
 
  const addNameNumber = (event) => {
    event.preventDefault()
    const originalPerson = persons.find(n => n.name === newName)

    if (persons.map(person => person.name).includes(newName)) {
      const confirmWindowForDuplicate = 
        window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)  
      if (confirmWindowForDuplicate === true) {
        personService
          .update(originalPerson.id, {...originalPerson, number : newNumber})
          .then((returnedPerson) => {
            setPersons(personSearch.map(person => person.name !== newName ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setRedMessage(
              `Information of ${newName} has already been removed from server`
            )
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setRedMessage(null)
            }, 5000)
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
        id: persons.length + 1
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setGreenMessage(`Added ${newName}`)
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setGreenMessage(null)
          }, 5000)
        })
        .catch(error => {
          setRedMessage(
            `${JSON.stringify(error.response.data.error).replace(/"/g, '')}`
          )
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setRedMessage(null)
          }, 5000)  
        })
    }  
  }

  const deleteNameNumberOf = (id) => {
    const person = persons.find(n => n.id === id)
    const confirmWindowForDelete = window.confirm(`Delete ${person.name}?`)
    
    if (confirmWindowForDelete === true) {
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
      <Container>
        <Typography>
          <Box border={1} borderColor="primary.main">
            <AppBar position="static">
              <h1>Phonebook</h1>
            </AppBar>
            <SuccessfulNotification message={greenMessage} />
            <UnsuccessfulNotification message={redMessage} />
            <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
            <h2>Add New</h2>  
            <PersonForm addNameNumber={addNameNumber} newName={newName} handleNewName={handleNewName}
              newNumber={newNumber} handleNewNumber={handleNewNumber} 
            />
            <h2>Contacts</h2>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {personSearch.map((person) =>
                    <TableRow key={person.id}>
                    <Persons 
                      key={person.id}
                      person={person}
                      deleteNameNumber={() => deleteNameNumberOf(person.id)} 
                    />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Typography>
      </Container>  
    </div>
  )
}

export default App