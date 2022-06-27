import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import AddCourse from './AddCourse'

const CourseList = () => {
  const [courses, setCourses] = useState([])
  const [newCourseForm, setNewCourseForm] = useState(false)
  

  
  useEffect(() => {
    fetch('http://localhost:9292/courses')
    .then((resp) => resp.json())
    .then((data) => setCourses(data))

    console.log(courses.professors)
  },[])

  function showNewCourseForm(){
    setNewCourseForm(!newCourseForm)
  }
  
  const courseList = courses.map((course) => {
    return (
      <li key={course.id}><NavLink to={`/courses/${course.id}`}>{course.subject}</NavLink></li>
    )
  })
  
  return (
    <div>
      <h1>Courses</h1>
      <button onClick={showNewCourseForm}>Add New Course</button>
        { newCourseForm ? <AddCourse courses={courses}/> : null }
      <ul>
        { courseList }
      </ul>
    </div>
  )

}

export default CourseList