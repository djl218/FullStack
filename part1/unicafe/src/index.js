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

const Counter = (props) => {
  const { text, allClicks } = props
  return (
    <div>
      {text} {allClicks}
    </div>
  )
}

const Average = (props) => {
  const { text, allClicks } = props
  return (
    <div>
      {text} {allClicks}
    </div>
  )
}

const PercentPositive = (props) => {
  const { text, allClicks } = props
  return (
    <div>
      {text} {allClicks} %
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const [averageGood, setAverageGood] = useState(0)
  const [averageNeutral, setAverageNeutral] = useState(0)
  const [averageBad, setAverageBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAverageGood(averageGood + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAverageNeutral(averageNeutral + 0)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAverageBad(averageBad - 1)
  }

  return (
    <div>
      <Header header='give feedback' />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Header header='statistics' />
      <Counter text='good' allClicks={good} />
      <Counter text='neutral' allClicks={neutral} />
      <Counter text='bad' allClicks={bad} />
      <Counter text='all' allClicks={good + neutral + bad} />
      <Average text='average' allClicks={(averageGood + averageNeutral + averageBad) / (good + neutral + bad)} />
      <PercentPositive text='positive' allClicks={good / (good + neutral + bad) * 100} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
