import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

import 'react-slideshow-image/dist/styles.css'


const spanStyle = {
  padding: '5px',
  color: '#fff',
  background: 'black',
  opacity : "0.5",
  

}

const divStyle = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: require('../images/Image.png'),
    caption: 'Insidemarket really helped us find what we were looking for quickly',
    fullname : '',
    location : '',
    stars: '',
  },
  {
    url: require('../images/shake.jpg'),
    caption: 'Insidemarket really makes for comfortable trading',
    fullname : 'Rhema Chukwumah',
    location : 'Lagos',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
   
    url: require('../images/Content.png'),
    caption: 'I make weekly profit from reselling goods thanks to Insidemarket',
    fullname : 'Isabella Garos',
    location : 'Lagos',
    stars: '⭐⭐⭐⭐⭐',
  },
];

const buttonStyle = {
    width: "30px",
    background: '',
    border: '0px',
    color: 'Whitesmoke'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><BsFillArrowLeftCircleFill/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><BsFillArrowRightCircleFill /></button>
}
const CarouselItem1 = () => {
    return (
      <div className="bg-red-300 container mx-auto">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,  }}>
                <span className=''>
                    <p style={spanStyle} className='font-extrabold text-2xl '>{slideImage.caption}</p>
                    <p style={spanStyle} className='font-extrabold text-4xl '>{slideImage.fullname}</p>
                    <p style={spanStyle} className='font-extrabold text-sm '>{slideImage.location}</p>
                    <p style={spanStyle}>{slideImage.stars}</p>
                </span>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default CarouselItem1;
