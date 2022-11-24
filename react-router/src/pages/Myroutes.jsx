import React from 'react'
import { Routes,Route } from 'react-router-dom'
function Myroutes() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
    </Routes>
  )
}

export default Myroutes