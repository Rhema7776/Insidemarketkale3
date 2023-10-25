import React from 'react'
import logo from "../images/Frame 1000001585.svg"
import { Typography } from '@material-tailwind/react';
import appstore from '../images/Mobile app store badge.svg';
import playstore from '../images/Mobile app store badge (1).svg';


const Footer = () => {
  return (
    
    <footer class="bg-white dark:bg-gray-900 py-10 xs:max-lg:px-3">
        <div class="container mx-auto w-full ">
            
          <div className='flex flex-wrap justify-between'>
            <div className=' xs:max-lg:mb-5 block'>
              <img src={logo} alt="" className='mb-5 block' />
              <Typography className='text-sm text-gray-500 mb-5 block'>
                Your Personalized E-Commerce Experience
              </Typography>
              <ul className=" flex flex-wrap items-center gap-y-2 gap-x-3 text-gray-500  ">
              <li>
                  <Typography
                    as="a"
                    href="/"
                    className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 decoration-slate-400"
                  >
                    Home
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#howitworks"
                    className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 decoration-slate-400"
                  >
                    How it works
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="font-normal transition-colors  hover:text-orange-500 focus:text-orange-500"
                  >
                    About us
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="font-normal transition-colors  hover:text-orange-500 focus:text-orange-500"
                  >
                   Testimonials
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                  >
                    Contact
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="#"
                    className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 decoration-slate-400"
                  >
                    FAQs
                  </Typography>
                </li>
              </ul>
            </div>
            <div className='flex flex-wrap-reverse gap-10 text-gray-500 '>
              <div className=''>
                <Typography
                  as="" className='font-bold text-sm text-orange-500 mb-3 block'>Contact us here
                </Typography>
                <Typography>
                  Email: <u className=''>examplemail@gmail.com</u>
                </Typography>
                <Typography>
                  Phone: <u className=''>+2349127521</u>
                </Typography>
              </div>
              <div className=''>
                <Typography className='font-bold text-sm text-orange-500 block mb-3 '>
                  Get the app
                </Typography>
                <div className="  xs:max-lg:flex xs:max-lg:gap-2">
                  <Typography as="a" href="#" className="block mb-2">
                    <button className="border-none w-full ">
                        <img src={appstore} alt="" className='w-full'/>
                    </button>
                  </Typography>
                  <Typography as="a" href=''>
                    <button className="border-none">
                      <img src={playstore} alt="" className='' />
                    </button>
                  </Typography>
                </div>
                
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">InsideMarket™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      
                      <span class="">Terms</span>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      
                      <span class="">Privacy Policy</span>
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                     
                      <span class="">Cookies</span>
                  </a>
                  
              </div>
          </div>
        </div>
    </footer>

  )
}

export default Footer
