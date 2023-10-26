import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './components/LogIn';
import  Dashboard  from './components/Dashboard';


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App