import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const vote = (content, votes, id) => {
        props.voteAnecdote(content, votes, id)
    }
    const notifiyThenHide = (content) => {
       props.setNotification(`you voted '${content}'`, 5)
    }

    return (
        <div>
            {props.anecdotes
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

const mapStateToProps = (state) => {
    if ( state.anecdoteFilter === null ) {
        return {
            anecdotes: state.anecdotes
        }
    }
    return {
        anecdotes: state.anecdotes.filter(anecdote => 
            anecdote.content.toLowerCase().includes(state.anecdoteFilter.toLowerCase()))
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    setNotification
}

const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList