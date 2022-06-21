import React, { useEffect, useState } from "react"

import './App.css';
import UserInput from "./UserInput";


function App() {
   
  const [courses, setCourses] = useState([])
  const [professors, setProfessors] = useState([])
  const [action, setAction] = useState("")
  const [category, setCategory] = useState("")


  useEffect(() => {
    fetch('http://localhost:9292/courses')
      .then((resp) => resp.json())
      .then((data) => setCourses(data))
}, [])

useEffect(() => {
  fetch('http://localhost:9292/professors')
    .then((resp) => resp.json())
    .then((data) => setProfessors(data))
}, [])

function addNewCourse(newCourse){
  setCourses(...courses, newCourse)
}

function addNewProfessor(newProffesor){
  setCourses(...courses, newProffesor)
}

  return (
      <div>
            <label>I want to: 
                <select onChange={(e) => setAction(e.target.value)}>
                    <option selected>Select an Action...</option>
                    <option value="POST">Add</option>
                    <option value="UPDATE">Edit</option>
                    <option value="DELETE">Delete</option>
                </select>
            </label>
            <label>a: 
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option selected>Select a Category...</option>
                    <option value="courses">Course</option>
                    <option value="professors">Professor</option>
                    <option value="books">Book</option>
                </select>
            </label>
            <UserInput action={action} category={category} professors={professors} courses = {courses} addNewCourse={addNewCourse} addNewProfessor ={addNewProfessor}/>

    </div>
  )
  
}

export default App;
