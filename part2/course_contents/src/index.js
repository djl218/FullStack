import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1> 
      {props.course.parts.map(course =>
        <p key={course.id}>
          {course.name} {course.exercises}
        </p>
      )}
    </div>
  )
}

const Total = props => {
  const total = props.course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <b>total of {total} exercises</b>;
};


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )  
}

ReactDOM.render(<App />, document.getElementById('root'))