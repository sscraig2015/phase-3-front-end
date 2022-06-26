import React from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import CourseList from './components/CourseList'
import ProfessorList from './components/ProfessorList' 
import PageNotFound from './components/PageNotFound'


function App() {
  return (
      <div className='App'>
        <Navbar />
          <Routes>
            <Route exact path = "/" element={ <Home /> }  />
            <Route exact path = "/professors" element={ <ProfessorList /> }  />
            <Route exact path = "/courses" element={ <CourseList /> }  />
            <Route path="*" element={ <PageNotFound /> }  />
          </Routes>
          
      </div>
    
  )
}

export default App