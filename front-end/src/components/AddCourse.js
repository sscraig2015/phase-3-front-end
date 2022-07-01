import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddCourse = ({professors}) => {
 
  const [name, setName] = useState(null)
  const [profId, setProfId] = useState(null)
  const navigate = useNavigate();

  
  function handleChange(e){
      setName(e.target.userInput)
  }
  function handleSelectChange(e){
      setProfId(e.target.professors)
  }

  function handleSubmit(e){
      e.preventDefault()
      
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
      const body = {subject: name, professor_id: profId }
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
            <input type="text" name="userInput"onChange={ handleChange } autoFocus={true}/>
          <label for="professors">Select Professor Name: </label>
            <select name="professors" id="professors" onChange={handleSelectChange}>
              {professors.map((prof) => {
                return <option value={prof.id}>{prof.name}</option>
              })}
            </select>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddCourse