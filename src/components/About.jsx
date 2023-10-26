import React from "react";
import ladyholdsphone from "../images/Content (1).svg";
import { Link } from "react-router-dom";
import playstore from "../images/Mobile app store badge (1).svg";
import appstore from "../images/Mobile app store badge.svg";

const About = () => {
  return (
    <div id="about" className="container mx-auto mt-5 xs:max-lg:px-3 ">
      <div className="">
        <h1 className="font-extrabold text-4xl ">
          Welcome to InsideMarket: Your Personalized <br /> E-Commerce
          Experience
        </h1>
        <p className="text-md mt-4 font-normal text-gray-700 ">
          Connecting Buyers to Sellers and Service Providers Like Never Before
        </p>
      </div>
      <div className=" mt-10 grid md:grid-cols-2 gap-4 mx-auto flex-col">
        <div className="">
          <div className="lg:mt-0 mt-3 text-gray-700  ">
            <h1 className=" mb-2 block text-black font-extrabold">Customize your requests</h1>
            <p className="font-thin text-xs">
              Tailor your requests with specific details to ensure you get
              exactly what you want.
            </p>
          </div>
          <div className="mt-3 text-gray-700">
            <h1 className=" mb-2 block text-black font-extrabold">Get access to a wide range of sellers and service providers</h1>
            <p className="  font-thin text-xs">
              With a growing community of sellers and service providers,
              InsideMarket gives you access to a wide range of offerings.
            </p>
          </div>
          <div className="mt-3  text-gray-700 ">
            <h1 className="mb-2 block text-black font-extrabold">Safety and Security</h1>
            <p className="font-thin text-xs">
              We prioritize your safety and privacy, implementing robust
              measures to verify our sellers and protect your information.
            </p>
          </div>
          <div className="flex  mt-6  md:flex">
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

        <div className="flex justify-end">
          <img  src={ladyholdsphone} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default About;
