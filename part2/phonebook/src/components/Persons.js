import React from 'react'

const Persons = (props) => {
    const { searchResults } = props
    return (
        searchResults.map(person => (
            <div key={person.name}>{person.name} {person.number}</div>
    )))
}

export default Persons