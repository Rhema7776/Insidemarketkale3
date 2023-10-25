import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill } from "react-icons/bs";

import 'react-slideshow-image/dist/styles.css'


const spanStyle = {
  padding: '5px',
  color: 'white',
  background: 'black',
  opacity : "0.7",
  fonttype: "Times New Roman",

  
 

}

const divStyle = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  borderTop: '2px white solid',
}
const slideImages = [
  {
    url: require('../images/Content.png'),
    caption: 'Insidemarket really helped us find what we were looking for quickly',
    fullname : 'Emmanuella Jones',
    location : 'Akure',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    url: require('../images/Content.png'),
    caption: "Insidemarket really makes for comfortable trading. I've experienced it firsthand",
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
    color: 'Whitesmoke'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><BsFillArrowLeftCircleFill/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><BsFillArrowRightCircleFill /></button>
}
const CarouselItem1 = () => {
    return (
      <div className="bg-red-300 container mx-auto  ">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>
                <span className=''>
                    <p style={spanStyle} className='font-bold text-xl border-t '> <i className=''>"</i>{slideImage.caption}<i>"</i></p>
                    <p style={spanStyle} className='font-extrabold text-3xl '>{slideImage.fullname}</p>
                    <p style={spanStyle} className='font-extrabold text-xs '>{slideImage.location}</p>
                    <p style={spanStyle} className='font-extrabold text-xs '>{slideImage.stars}</p>
                </span>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default CarouselItem1;
