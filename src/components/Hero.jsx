import React, { useState } from "react";
import {Typography } from "@material-tailwind/react";
import iphone1 from "../images/Content (2).svg";
import iphone2 from "../images/Content (2).png";
import playstore from "../images/Mobile app store badge.svg";
import appstore from "../images/Mobile app store badge (1).svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

 
  

  return (
    <div id="" className="py-13">
      <div className="container mx-auto grid    md:grid-cols-2 flex-col justify-between  xs:max-lg:px-3  ">
        <div className=" ">
         
          <div className=" border-b-2 mt-20  flex flex-wrap   border-white-500 xs:max-sm:max-w-[90%] sm:max-md:max-w-[43%] md:max-lg:max-w-[72%] lg:max-xl:max-w-[60%] xl:max-w-[48%] pb-3">
            <div
              className={
                toggleState === 1
                  ? "tab relative top-[13px] border-orange-500 border-b-2  border-solid  xl:pt-0  "
                  : "tab   border-white-500 pt-3 "
              }
              onMouseEnter={() => toggleTab(1)}
            >
              <p as="p" className=" text-sm text-gray-700  xs:max-lg:text-xs hover:text-orange-500 font-bold ">For buyers</p>
            </div>
            <div
              className={
                toggleState === 2
                  ? "tab relative top-[13px]  border-orange-500 border-b-2 text-center border-solid pt-0"
                  : "tab  border-orange-500  text-center pt-3"
              }
              onMouseEnter={() => toggleTab(2)}
            >
              <p as="p" className=" text-sm xs:max-lg:text-xs hover:text-orange-500 ml-5 font-bold text-gray-700">For sellers and service providers</p>
              
            </div>
          </div>

          <div className="content-tab  items-center mt-4">
            <div
              className={
                toggleState === 1
                  ? "content active-content "
                  : "content items-center  "
              }
            >
              <h1 className="max-w-xl text-2xl text-start font-extrabold leading-none  lg:text-5xl lg:text-left lg:leading-tight pb-5">
                Quickest Route to Connect with Sellers and Service Providers
              </h1>
              <Typography variant="p" className="  text-gray-700 lg:text-left lg:max-w-md pb-5">
                Are you in the market for a specific product or service, but don't
                know where to start looking?InsideMarket is here to simplify your
                search and make your buying and service-seeking experience hassle-free.
              </Typography>
              <div className="flex  mt-10  md:flex">
                <Link to="/" className=" ">
                  <button className="border-none mr-4">
                  <img src={appstore} alt="" />
                  </button>
                </Link>
                <Link to="/">
                  <button className="">
                    <img src={playstore} alt="" />
                  </button>
                </Link>
              </div>              
            </div>
            <div
              className={
                toggleState === 2
                  ? "content active-content"
                  : "content items-center "
              }
            >
              <h1 className="max-w-xl text-2xl font-extrabold leading-none lg:text-5xl lg:text-left lg:leading-tight pb-5">
                Connect with customers, increase your profits
              </h1>
              <Typography variant="p"className="  text-gray-700">
                InsideMarket is your go-to destination to find ready-to-buy,
                Ready-to-pay customers for your product or service. Install the
                app to get started!
              </Typography>
              <div className="flex  mt-10  md:flex">
                <Link to="/" className=" ">
                  <button className="border-none mr-4">
                  <img src={appstore} alt="" />
                  </button>
                </Link>
                <Link to="/">
                  <button className="">
                  <img src={playstore} alt="" />
                  </button>
                </Link>
              </div> 
            </div>
            
            
          </div>
        </div>

        
        <div className="content-tab flex justify-end ">
          <div
            className={
              toggleState === 1
                ? "content active-content "
                : "content "
            }
          >
            <img  src={iphone1} alt="" className="" />
          </div>
          <div
            className={toggleState === 2 ? "content active-content  " : "content   "}
          >
            <img src={iphone2} alt="" className="" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;