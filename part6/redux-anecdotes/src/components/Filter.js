import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = (event) => {
        event.preventDefault()
        const anecdoteFilter = event.target.value
        props.filterAnecdotes(anecdoteFilter)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input onChange={handleChange} />
        </div>
    )
}

export default connect(
    null,
    { filterAnecdotes }
)(Filter)