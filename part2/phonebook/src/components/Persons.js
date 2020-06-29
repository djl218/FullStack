import React from 'react'

const Persons = ({ person, deleteNameNumber }) => {
    return (
            <div>
                {person.name} {person.number}
                <button onClick={deleteNameNumber}>delete</button>
            </div>
    )
}

export default Persons