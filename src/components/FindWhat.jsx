import React from 'react';
import Emmanuella from '../images/Image.png';
import { Link } from 'react-router-dom';
import appstore from "../images/Mobile app store badge.png";
import playstore from "../images/Mobile app store badge (1).png";
import { Typography } from '@material-tailwind/react';
import { Box } from '@mui/material';

const FindWhat = () => {
  return (
    <div className=''>
      <div className=' grid md:grid-cols-2 gap-8 container mx-auto  '>
        <img src={Emmanuella} alt="" className='lg:w1/2 ' />
        <div className='bg-pink-200 flex items-center lg:w1/2'>
            
          <Box>
            <div className='items-center'>
              <Typography className="font-bold  text-4xl ">
                Find what you need on InsideMarket
              </Typography>
              <Typography className='text-sm mt-4 text-gray-400'>
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
          </Box>  
            
        </div>
      </div>
    </div>
  )
}

export default FindWhat
