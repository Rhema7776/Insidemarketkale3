import React from 'react'
import Navbar from '../components/Navbar'
import Hero  from '../components/Hero'
import Contacts from '../components/Contacts'
import {Footer} from '../components/Footer'
import Howitworks from '../components/Howitworks'
import {Testimonials} from '../components/Testimonials'
import About from '../components/About';
import Test from '../components/Test';
import Ourgoal from '../components/Ourgoal';

export default function Home() {

  return (
    <>
      
      <Navbar />
      
      <Hero /> 
      {/* <Test/> */}
      <About/>
      <Ourgoal/>
      <Howitworks/>
      
      <Contacts/>
      {/* <Testimonials/> */}
      <Footer />
    </>
  )
}
