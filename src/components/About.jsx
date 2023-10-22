import React from "react";
import ladyholdsphone from "../images/Content.png";
import { Box } from "@mui/material";
import {Link} from "react-router-dom";
import playstore from "../images/Mobile app store badge (1).png";
import appstore from "../images/Mobile app store badge.png";

const About = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="">
        <h1 className="font-bold text-2xl ">         
          Welcome to InsideMarket: Your Personalized <br /> E-Commerce Experience
        </h1>
        <p className="text-sm mt-4">
          Connecting Buyers to Sellers and Service Providers Like Never Before
        </p>
      </div>
      <div className=" mt-10 grid md:grid-cols-2 gap-4 mx-auto flex-col">
        <div className="">
          <div className="mt-4">
            <h1 className=" ">Customize your shit</h1>
            <p className="font-thin text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              libero veniam ipsam enim omnis? Enim esse vitae consequatur aut
              voluptate in sunt necessitatibus mollitia optio, nulla eligendi
              velit perferendis labore?
            </p>
          </div>
          <div className="mt-4">
            <h1>Customize your shit</h1>
            <p className="font-thin text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              libero veniam ipsam enim omnis? Enim esse vitae consequatur aut
              voluptate in sunt necessitatibus mollitia optio, nulla eligendi
              velit perferendis labore?
            </p>
          </div>
          <div className="mt-4">
            <h1>Customize your shit</h1>
            <p className="font-thin text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              libero veniam ipsam enim omnis? Enim esse vitae consequatur aut
              voluptate in sunt necessitatibus mollitia optio, nulla eligendi
              velit perferendis labore?
            </p>
          </div>
          <Box className="flex  mt-10  md:flex">
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
         </Box>
        </div>
        
        <img src={ladyholdsphone} alt="" />
        
      </div>
    </div>
  );
};

export default About;
