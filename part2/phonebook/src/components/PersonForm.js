import React from 'react'

const PersonForm = ({ addNameNumber, newName, handleNewName, newNumber, handleNewNumber }) => {
    return (
        <form onSubmit={addNameNumber}>
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
    )
}

export default PersonForm