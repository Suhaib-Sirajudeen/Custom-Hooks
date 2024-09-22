import {  useState } from 'react'

import './App.css'
import{Routes,Route} from "react-router-dom"
import { Input } from './pages/Input/Input.jsx'
import { Home } from './pages/Home.jsx'


function App() {

  return (
    <>

      <Routes>
        
        <Route path="/"  element={<Home/>}/>
        <Route path='/input' element={<Input/>}/>
      </Routes>

      

    </>
  )
}

export default App
