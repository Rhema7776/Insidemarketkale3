import React from 'react'
import iphone1 from "../images/Content (3).png";
import iphone2 from "../images/Content (4).png";
import iphone3 from "../images/Content (5).png";

const Aboutus = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={iphone1} className="w-full" />
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src={iphone2} className="w-full" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src={iphone3} className="w-full" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
        </div>
      </div> 
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a> 
        <a href="#item2" className="btn btn-xs">2</a> 
        <a href="#item3" className="btn btn-xs">3</a> 
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  )
}


export default Aboutus
