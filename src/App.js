import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Hero from './components/Hero';
import Howitworks from './components/Howitworks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// import BlogList from './containers/PostList'
// import About from './containers/About'
// import Contact from './containers/Contact'

