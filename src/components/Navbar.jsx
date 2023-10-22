import React, {useState, useContext} from 'react'
import logo from '../images/Frame 1000001585.png' 
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {NavLink, Link} from 'react-router-dom';
import { Button } from 'flowbite-react';
import appstore from '../images/Mobile app store badge.png';
import playstore from '../images/Mobile app store badge (1).png';
import Scroll from 'react-scroll'

const ScrollLink = Scroll.ScrollLink

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  
  return (
    <nav className=' z-10 text-16px bg-white sticky  top-0 drop-shadow-sm border-b border-gray-100 w-full   '>
      <div className='container mx-auto md:px-12 md:flex md:justify-between md:items-center  w-full'>
      <div className=' flex justify-between items-center   h-full w-full '>
            <div className=' items-center'>
             <img src={logo} alt="" className='' />          
            </div>
            <div className='hidden  md:flex justify-between w-96 text-sm'>
              
              <a href='#howitworks' >How it works</a>
                  
              
              <a href='#howitworks'>About us</a>
             
              
              <a href='#howitworks'>Testimonials</a>
              
             
              <a href='#contacts'>Contacts</a>
              
              
            </div>
            <div className='hidden md:flex '> 
                <NavLink to='/' className=' '>
                  <button className='border-none bg-transparent mr-4 py-3'>
                    <img src={appstore} alt="" />
                  </button>
                </ NavLink>
                <NavLink to='/'>
                  <button className=' py-3'>
                    <img src={playstore} alt="" />
                  </button>
                </NavLink>
                
            </div>
            <div className='md:hidden ' onClick={handleClick}>
              {!nav ? <MenuIcon className='w-5 ' /> : <XIcon className='w-5' />}
                
            </div>
        </div>
        <div  className={!nav ? 'hidden ' : 'w-full'}>
          <hr className="my-2 border-blue-gray-50" />
          <ul className='my-4 w-full'>
            <Link to='/Howitworks'>
            <li>How it works</li>
            </Link>
            <Link to='/About'>
              <li className='w-full'>About us</li>
            </Link>
            <Link to='/Testimonials'>
              <li className='w-full'>Testimonials</li>
            </Link>
            <Link to='/Contacts' >
              <li className=' w-full'>Contacts</li>
            </Link>
              
          </ul>   
          <hr className="my-2 border-blue-gray-50" /> 
        
          <div className='flex   my-4  '> 
            <NavLink to='/' className=' '>
              <button className='border-none bg-transparent mr-4 py-3'>
                <img src={appstore} alt="" />
              </button>
            </ NavLink>
            <NavLink to='/'>
              <button className=' py-3'>
                  <img src={playstore} alt="" />
              </button>
            </NavLink>
                  
          </div>       
        </div>
       
        
      </div>
    </nav>
  )
}

export default Navbar