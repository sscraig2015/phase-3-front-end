import React from 'react'

const AddCourse = () => {
  return (
    <div>
      <form>
        <h1>New Course</h1>
        <label>Course Name: </label>
        <input type="text" name="user-input"/>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default AddCourse