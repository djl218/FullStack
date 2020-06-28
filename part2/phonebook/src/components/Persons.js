import React from 'react'

const Persons = (props) => {
    const { personSearch } = props
    return (
        personSearch.map(person => (
            <div key={person.name}>{person.name} {person.number}</div>
    )))
}

export default Persons