import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {
  const total = props.topic.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  )
  return (
    <div>
      <h1>Web development curriculum</h1> 
      {props.courses.map(course =>
        <div>
          <h2 key={course.id}>
            {course.name} 
          </h2>
          {course.parts.map(topic =>
            <p key ={topic.id}>
              {topic.name} {topic.exercises}
            </p>
          )}
          <b key={total}>total of {total} exercises</b>    
        </div>
      )} 
    </div>
  )
}

/*const Total = props => {
  const total = props.course.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <b>total of {total} exercises</b>
}*/


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 2
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }  
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} topic={courses.parts} />
    </div>
  )  
}

ReactDOM.render(<App />, document.getElementById('root'))