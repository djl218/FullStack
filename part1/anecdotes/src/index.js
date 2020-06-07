import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  const { header } = props
  return (
    <h1>{header}</h1>
  )
}

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>  
  )
}

const App = (props) => {
  const voteArray = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)

  const [voteCount, setVote] = useState(voteArray)
  const [selected, setSelected] = useState(0)

  const copyVoteCount = [...voteCount]
    copyVoteCount[selected] += 1

  const mostVotesIndex = voteCount.indexOf(Math.max.apply(null, voteCount))  

  const handleVote = () => {
    setVote(copyVoteCount)
  }
 
  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  return (
    <div>
      <Header header='Anecdote of the day' />
      <div>{props.anecdotes[selected]}</div>
      <div>has {voteCount[selected]} votes</div>
      <Button onClick={handleVote} text='vote' />
      <Button onClick={handleNext} text='next anecdote' />
      <Header header='Anecdote with most votes' />
      <div>{props.anecdotes[mostVotesIndex]}</div>
      <div>has {voteCount[mostVotesIndex]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

