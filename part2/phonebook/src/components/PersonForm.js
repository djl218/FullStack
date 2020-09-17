import React from 'react'
import {
  TextField,
  Button
} from '@material-ui/core/'

const PersonForm = ({ addNameNumber, newName, handleNewName, newNumber, handleNewNumber }) => {
    return (
        <form onSubmit={addNameNumber}>
        <div>
          name: <TextField value={newName} onChange={handleNewName} />
        </div>  
        <div>
          number: <TextField value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">add</Button>
        </div>
        </form>
    )
}

export default PersonForm