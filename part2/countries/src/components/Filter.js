import React from 'react'

const Filter = ({ countrySearch, handleCountrySearch }) => {
    return (
        <div>
          find countries <input value={countrySearch} onChange={handleCountrySearch}/>
        </div>
    )
}

export default Filter