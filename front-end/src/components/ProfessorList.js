import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AddProfessor from './AddProfessor'

const ProfessorList = () => {

  const [professors, setProfessors] = useState([])
  const [newProfessorForm, setNewProfessorForm] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9292/professors')
    .then((resp) => resp.json())
    .then((data) => setProfessors(data))
  },[])

  function showNewProfessorForm(){
    setNewProfessorForm(!newProfessorForm)
  }
  
  const profList = professors.map((prof) => {
    return (
      <div key={prof.id}>
        <h3>Professor {prof.name}</h3>
        <ul>
          {prof.courses.map((course) => {
            return <li><NavLink to={`/courses/${course.id}`}>{course.subject}</NavLink></li>
          })}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      <h1>Professors</h1>
      <button onClick={showNewProfessorForm}>Add New Professor</button>
      { newProfessorForm ? <AddProfessor /> : null }
      {profList}
    </div>
  )
}

export default ProfessorList