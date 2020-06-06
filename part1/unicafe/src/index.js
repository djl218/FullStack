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

//text2 is only needed to show percent sign for last statistic 
const Statistic = (props) => {
  const { text, allClicks, text2 } = props
  return (
    <div>
      {text} {allClicks} {text2}             
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

  if (good + neutral + bad === 0) {
    return (
      <div>
        <Header header='give feedback' />
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <Header header='statistics' />
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
        <Header header='give feedback' />
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <Header header='statistics' />
        <Statistic text='good' allClicks={good} />
        <Statistic text='neutral' allClicks={neutral} />
        <Statistic text='bad' allClicks={bad} />
        <Statistic text='all' allClicks={good + neutral + bad} />
        <Statistic text='average' allClicks={(averageGood + averageNeutral + averageBad) / (good + neutral + bad)} />
        <Statistic text='positive' allClicks={good / (good + neutral + bad) * 100} text2={'%'} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
