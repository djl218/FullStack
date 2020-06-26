import React from 'react'

const Filter = (props) => {
    const { newSearch, handleNewSearch } = props
    return (
        <div>
          find countries <input value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter