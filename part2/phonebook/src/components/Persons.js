import React from 'react'
import searchResults from './Filter'

const Persons = () => {
    return (
        searchResults.map(person => (
            <div>{person.name} {person.number}</div>
    )))
}

export default Persons



/*import React from 'react'

const Persons = ({ person }) => {
    return (
        <div>{person.name} {person.number}</div>
    )
}

export default Persons*/