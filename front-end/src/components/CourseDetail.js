import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'



const CourseDetail = () => {
    
    const [course, setCourse] = useState([])
    const params = useParams()
    const navigate = useNavigate();
 
    
    useEffect(() => {
        
        fetch(`http://localhost:9292/courses/${params.id}`)
            .then((resp) => resp.json())
            .then((data) => setCourse(data))
        
          
    }, [])
    
    function deleteCourse(){
        fetch(`http://localhost:9292/courses/${params.id}`, { method:"DELETE"})
            .then((resp) => resp.json())
            .then((data) => console.log(data))

            navigate("/courses")
    }
    
    if(course.length === 0) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                
                <h1>{course.subject}</h1>
                <h3>Delete Course</h3>
                <button onClick={deleteCourse} value="Delete Course"/>
                <h3>Students</h3>
                <ol>
                    {course.students.map((student) => {
                        return <li>{student.name}</li>
                    })}
                </ol>
                <h3>Required Reading</h3>
                <ul>
                    {course.books.map((book) => {
                        return <li>{book.title}</li>
                    })}
                </ul>
            </div>    
        )
    }
    
}

export default CourseDetail