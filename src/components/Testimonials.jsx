import React from 'react';

import { Link } from 'react-router-dom';
import appstore from "../images/Mobile app store badge.svg";
import playstore from "../images/Mobile app store badge (1).svg";
import { Typography } from '@material-tailwind/react';
import CarouselItem1 from './CarouselItem1';


const FindWhat = () => {
  return (
    <div className='xs:max-lg:px-3' id='testimonials'>
     
      <div className='grid md:grid-cols-2 gap-8 container mx-auto   '>
     
          <div className='overflow-x-hidden items-center w-full '>
           <CarouselItem1 className="w-full   " />
          </div>
         
        
        <div className='flex justify-end items-center lg:w1/2'>
            
          <div>
            <div className='items-center'>
              <Typography className="font-bold  text-4xl ">
                Find what you need on InsideMarket
              </Typography>
              <Typography className='text-sm mt-4 text-gray-500'>
               Get connected to sellers and providers and buy whatever you want
              </Typography>
            </div>
            
              
            <div className='flex   my-4  '> 
              <Link to='/' className=' '>
                <button className='border-none bg-transparent mr-4 py-3'>
                  <img src={appstore} alt="" />
                </button>
              </Link>
              <Link to='/'>
              <button className=' py-3'>
                  <img src={playstore} alt="" />
              </button>
              </Link>
                
            </div>   
          </div>  
            
        </div>
      </div>
    </div>
  )
}

export default FindWhat
