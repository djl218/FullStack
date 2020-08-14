import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        const anecdoteFilter = event.target.value
        console.log(anecdoteFilter)
        dispatch(filterAnecdotes(anecdoteFilter))
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

export default Filter