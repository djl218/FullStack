import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.header}</h1>
}

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const { text, allClicks} = props
  return (
    <div>
      {text} {allClicks}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header header='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Header header='statistics' />
      <Statistics text='good' allClicks={good} />
      <Statistics text='neutral' allClicks={neutral} />
      <Statistics text='bad' allClicks={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
