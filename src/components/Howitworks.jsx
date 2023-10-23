import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import iphone1 from "../images/Content (7).png";
import iphone2 from "../images/Content (4).png";
import iphone3 from "../images/Content (5).png";

const Howitworks = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
     
  };

  return (
    <Box id='howitworks' className="py-20">
      <Box className="text-center ">
        <h1 className="font-extrabold text-4xl ">How it Works</h1>
        <Typography className="text-gray-400 text-sm">
          Think of it as twitter for e-commerce 
        </Typography> 
      </Box> 
      <Box className="container mx-auto mt-7 flex flex-wrap-reverse  justify-center xs:max-lg:px-3 ">
      <Box
    
      className="bloc-tabs grid mt-12   md:grid-cols-3 mx-auto flex-col justify-center border-white-500 border-t-2 ">
            <Box
            className={
                toggleState === 1
                ? "tabs md:relative bottom-[2px] xs:hover:bg-orange-100 border-orange-500 border-t-2  border-solid pt-4 text-center"
                : "tabs text-center xs:hover:bg-orange-100  border-white-500 pt-4"
            }
            onMouseEnter={() => toggleTab(1)}
            >
            <h1 className="font-bold">Post your requests</h1>
            <Typography className="font-thin text-sm text-gray-500 max-w-md">Post what you want to buy, whether in text, images or voice.</Typography>
            </Box>
            <Box
            className={
                toggleState === 2
                ? "tabs relative bottom-[2px] xs:hover:bg-orange-100  border-orange-500 border-t-2 border-solid text-center pt-4"
                : "tabs  border-orange-500 xs:hover:bg-orange-100 text-center pt-4"
            }
            onMouseEnter={() => toggleTab(2)}
            >
            <h1 className="font-bold">Sellers Respond with Offers</h1>
            <Typography className="font-thin text-sm text-gray-500">
                Within minutes, sellers Respond to your posts and give you offers.
            </Typography>
            </Box>
            <Box
            className={
                toggleState === 3
                ? "tabs relative bottom-[2px] xs:hover:bg-orange-100 border-t-2 border-t-orange-500 border-solid text-center pt-4"
                : "tabs  border-white-500 xs:hover:bg-orange-100 text-center pt-4"
            }
            onMouseEnter={() => toggleTab(3)}
            >
            <h1 className="font-bold">Choose your seller and buy</h1>
            <Typography className="font-thin text-sm text-gray-500">
                Connect with your chosen seller, chat, negotiate, and finalize deals
                within the app.
            </Typography>
            </Box>
        </Box>

      <Box className="content-tabs  items-center ">
        <Box
          className={
            toggleState === 1
              ? "content active-content border-orange-500 border-t-6 text-center"
              : "content text-center items-center  "
          }
        >
          <img  src={iphone1} alt="" />
        </Box>
        <Box
          className={toggleState === 2 ? "content active-content" : "content items-center "}
        >
          <img src={iphone2} alt="" />
        </Box>

        <Box
          className={toggleState === 3 ? "content active-content" : "content items-center "}
        >
          <img src={iphone3} alt="" />
        </Box>
      </Box>
    </Box>


    </Box>
  )
}

export default Howitworks
