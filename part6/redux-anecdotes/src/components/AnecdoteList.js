import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({anecdoteFilter, anecdotes}) => {
        if ( anecdoteFilter === null) {
            return anecdotes
        }
        return (
            anecdotes.filter(anecdote => 
                anecdote.content.toLowerCase().includes(anecdoteFilter.toLowerCase()))
        )    
    })

    const vote = (content, votes, id) => {
        dispatch(voteAnecdote(content, votes, id))
    }
    const notifiyThenHide = (content) => {
        dispatch(showNotification(`you voted '${content}'`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000)
    }

    return (
        <div>
            {anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button 
                            onClick={() => {
                                vote(anecdote.content, anecdote.votes, anecdote.id)
                                notifiyThenHide(anecdote.content)
                            }}
                        >
                            vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList