import React from 'react'

const Total = (props) => {
    const total = props.topic.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      0
    )
    return <b>total of {total} exercises</b>
  }
  
    const Course = (props) => {
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
            <Total topic={course.parts} />    
          </div>
        )} 
      </div>
    )
  }

  export default Course