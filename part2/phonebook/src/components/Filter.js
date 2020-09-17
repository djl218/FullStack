import React from 'react'
import {
  TextField
} from '@material-ui/core/'

const Filter = ({ newSearch, handleNewSearch }) => {
    return (
        <div>
          <br></br>
          find contact: <TextField value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter