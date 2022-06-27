import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddProfessor = () => {
  
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
        const body = {name: name}
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
            }

        fetch('http://localhost:9292/professors', options)
            .then((resp) => resp.json())

        navigate("/")

    }
    
    return (
    <div>
        <h1>New Professor</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Last Name: </label>
            <input id="name" type='text' value = {name} onChange={ handleChange } autoFocus={true}/>
            <br />
                <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default AddProfessor