import React, { useState, useEffect } from 'react'

const ProfessorList = () => {

  const [professors, setProfessors] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/professors')
    .then((resp) => resp.json())
    .then((data) => setProfessors(data))
  },[])
  
  const profList = professors.map((prof) => {
    return (
      <div>
        <h3>Professor {prof.name}</h3>
        <ul>
          {prof.courses.map((course) => {
            return (<li>{course.subject}</li>)
          })}
        </ul> 
      </div>
    )
  })
  
  return (
    <div>
      <h1>Professors</h1>
      {profList}
    </div>
  )
}

export default ProfessorList