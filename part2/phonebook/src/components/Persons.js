import React from 'react'

const Persons = ({ person }) => {
    return (
        <div>{person.name} {person.number}</div>
    )
}

export default Persons