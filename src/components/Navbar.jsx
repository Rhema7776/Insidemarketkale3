import React, {useState} from 'react'
import logo from '../images/TwerceLogoText.png' 
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {NavLink} from 'react-router-dom';
import appstore from '../images/Mobile app store badge.svg';
import playstore from '../images/Mobile app store badge (1).svg';
import { Typography } from '@material-tailwind/react';





const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleClick = () => setNav(!nav)
  
  
  return (
    <nav className='container mx-auto z-10 text-16px bg-white   w-full xs:py-3  '>
      <div className=' md:flex md:justify-between md:items-center  w-full'>
      <div className=' flex justify-between items-center   h-full w-full '>
            <div className=' items-center'>
             <img src={logo} alt="" className='xs:ml-3 sm:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 3xl:ml-0 w-12' />          
            </div>
            <ul className='hidden xs:max-md:w-80 md:max-lg:w-96    md:flex justify-between  w-96 text-sm text-gray-700'>
           
              <li>
                  <Typography
                    as="a"
                    href="#howitworks"
                    color=""
                    className="font-normal text-lg transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
                    
                  >
                    How it works
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#about"
                    color=""
                    className="font-normal text-lg  transition-colors hover:text-orange-500 focus:text-orange-500"
                  >
                    About us
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#testimonials"
                    color=""
                    className="font-normal text-lg  transition-colors hover:text-orange-500 focus:text-orange-500"
                  >
                    Testimonials
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#contacts"
                    color=""
                    className="font-normal text-lg  transition-colors hover:text-orange-500 focus:text-orange-500"
                  >
                    Contacts
                  </Typography>
                </li>
              
              
            </ul>
            <div className='hidden xs:max-lg:w-40  md:flex '> 
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
              {!nav ? <MenuIcon className='w-5 xs:mr-3 ' /> : <XIcon className='w-5 xs:mr-3' />}
                
            </div>
        </div>
        <div  className={!nav ? 'hidden ' : 'w-full '}>
          <hr className="my-2 border-blue-gray-50" />
          <ul className='my-4 w-full p-3'>
            <li>
              <Typography
                as="a"
                href="#howitworks"
                color="blue-gray"
                className="font-normal block mb-2 text-gray-500 text-sm transition-colors hover:text-orange-500 focus:text-orangee-500 decoration-slate-400"
              >
                How it works
              </Typography>
              
            </li>
            <li>
              <Typography
                as="a"
                  href="#about"
                  color="blue-gray"
                  className="font-normal block mb-2 text-gray-500 text-sm  transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                About us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#testimonials"
                color="blue-gray"
                className="font-normal block mb-2 text-gray-500 text-sm  transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                Testimonials
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#contacts"
                color="blue-gray"
                className="font-normal block  text-gray-500 text-sm  transition-colors hover:text-orange-500 focus:text-orange-500"
              >
                Contacts
              </Typography>
            </li>
              
          </ul>   
          <hr className="my-2 border-blue-gray-50" /> 
        
          <div className='flex   my-4 p-2 '> 
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