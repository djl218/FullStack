import React from 'react'
import {
  TextField
} from '@material-ui/core/'

const Filter = ({ newSearch, handleNewSearch }) => {
    return (
        <div>
          find contact: <TextField value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter