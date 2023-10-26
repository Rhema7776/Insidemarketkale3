import React from 'react'
import Navbar from '../components/Navbar'
import Hero  from '../components/Hero'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Howitworks from '../components/Howitworks'
import Testimonials from '../components/Testimonials'
import About from '../components/About';
import Ourgoal from '../components/Ourgoal';




export default function Home() {

  return (
    < >
      
      <Navbar />
      
      <Hero /> 
      
      <About/>
      <Ourgoal/>
      <Howitworks/>
      
      < Testimonials/>
      <Contacts/>
     
      <Footer />
    </>
  )
}
