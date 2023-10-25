import React from 'react'
import Navbar from '../components/Navbar'
import Hero  from '../components/Hero'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Howitworks from '../components/Howitworks'
import {Testimonials} from '../components/Testimonials'
import About from '../components/About';
import Ourgoal from '../components/Ourgoal';
import FindWhat from '../components/FindWhat';
import  CarouselItem1  from '../components/CarouselItem1'


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
     
      <Footer />
    </>
  )
}
