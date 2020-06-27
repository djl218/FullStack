import React from 'react'

const Filter = ({ newSearch, handleNewSearch }) => {
    return (
        <div>
          find countries <input value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter