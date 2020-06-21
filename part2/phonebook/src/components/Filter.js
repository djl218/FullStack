import React from 'react'

const Filter = (props) => {
    const { newSearch, handleNewSearch } = props
    return (
        <div>
          filter shown with <input value={newSearch} onChange={handleNewSearch}/>
        </div>
    )
}

export default Filter