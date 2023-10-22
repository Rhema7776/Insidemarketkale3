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
import FindWhat from '../components/FindWhat';
export default function Home() {

  return (
    <>
      
      <Navbar />
      
      <Hero /> 
      
      <About/>
      <Ourgoal/>
      <Howitworks/>
      <FindWhat />
      <Contacts/>
      {/* <Testimonials/> */}
      <Footer />
    </>
  )
}
