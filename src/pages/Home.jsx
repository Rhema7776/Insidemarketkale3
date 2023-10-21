import React from 'react'
import Navbar from '../components/Navbar'
import Hero  from '../components/Hero'
import Contacts from '../components/Contacts'
import {Footer} from '../components/Footer'
import Howitworks from '../components/Howitworks'
import {Testimonials} from '../components/Testimonials'
import About from '../components/About'
import Test from '../components/Test'

export default function Home() {

  return (
    <>
      
      <Navbar />
      <Test/>
      {/* <About/> */}
      {/* <Hero />  */}
      <Howitworks/>
      <Contacts/>
      {/* <Testimonials/> */}
      <Footer />
    </>
  )
}
