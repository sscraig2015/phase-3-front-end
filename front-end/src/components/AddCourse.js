import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddCourse = ({courses}) => {

  const [name, setName] = useState(null)
  const navigate = useNavigate();

  
  function handleChange(e){
      setName(e.target.value)
  }

  function handleSubmit(e){
      e.preventDefault()
      
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
      const body = {subject: name}
      const options = {
          method: "POST",
          headers,
          body: JSON.stringify(body)
          }

      fetch('http://localhost:9292/courses', options)
          .then((resp) => resp.json())

      navigate("/")

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>New Course</h1>
        <label>Course Name: </label>
        <input type="text" name="user-input"onChange={ handleChange } autoFocus={true}/>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddCourse