import React, {useState, useEffect} from 'react'

const CourseList = () => {
  const [courses, setCourses] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/courses')
    .then((resp) => resp.json())
    .then((data) => setCourses(data))
  },[])
  
  const courseList = courses.map((course) => {
    return (
      <div>
        <h3>{course.subject}</h3>
        <h5>Professor {course.professor.name}</h5>
        <ul>
          {course.books.map((book) => {
            return (<li>{book.title}, by: {book.author}</li>)
          })}
        </ul> 
      </div>
    )
  })
  
  return (
    <div>
      <h1>Courses</h1>
      {courseList}
    </div>
  )

}

export default CourseList