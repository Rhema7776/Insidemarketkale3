// import React, { useState } from "react";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
 
// export function Hero() {
//   const [activeTab, setActiveTab] = React.useState("html");
//   const data = [
//     {
//         label: "1",
//         value: "html",
//         Header: "Post your Requests",
//         desc: `Post what you want to buy, whether in text, images or voice`,
//         img: require("../images/Content (3).png")
//       },
//       {
//         label: "2",
//         value: "react",
//         Header: "Sellers Respond with Offers",
//         desc: `Within minutes, sellers Respond to your posts and give you offers `,
//         img: require("../images/Content (4).png")
//       },
//       {
//         label: "3",
//         value: "react",
//         Header: "Choose your seller and buy",
//         desc: `Connect with your chosen seller, chat, negotiate, and finalize deals within the app`,
//         img: require("../images/Content (5).png")
//      }
//   ];
//   return (
//     <Tabs value={activeTab}>
//       <TabsHeader
//         className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
//         indicatorProps={{
//           className:
//             "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
//         }}
//       >
//         {data.map(({ label, value }) => (
//           <Tab
//             key={value}
//             value={value}
//             onClick={() => setActiveTab(value)}
//             className={activeTab === value ? "text-gray-900" : "border-orange border-b"}
//           >
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody>
//         {data.map(({ value, desc, Header }) => (
//           <TabPanel key={value} value={value}>
//             <h1>{Header}</h1>
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }


import * as React from 'react';
import iphone1 from "../images/Content (3).png";
import iphone2 from "../images/Content (4).png";
import iphone3 from "../images/Content (5).png";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Hero = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',backgroundColor: 'grey', display: "flex", flexWrap: 'wrap-reverse' }} >
      <Box className="w-full bg-blue-400" sx={{ borderBottom: 10, borderColor: 'whitesmoke', color: "orange"}}>
        <Tabs 
          value={value} 
          onChange={handleChange} aria-label="basic tabs example" className='w-full grid grid-cols-3' centered >
          <Tab label="" {...a11yProps(0)}>jvhvghvgh</Tab> 
          <Tab label="<div> <h1>sdvd</h1> <p>jkbjkhbjh</p></div>" {...a11yProps(1)} />
          <Tab label="<div> <h1>sdvd</h1> <p>jkbjkhbjh</p></div>" {...a11yProps(2)} />
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className="container align-middle mx-auto bg-purple-400 items-center flex justify-center" >
        <img  src={iphone1} alt="" />
        <p >ejkdbcuhscbusdc budbscsdcddcss</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="container align-middle mx-auto items-center flex justify-center" >
        <img src={iphone2} alt="" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="container align-middle mx-auto items-center flex justify-center w-full" >
        <img src={iphone3} alt="" />
      </CustomTabPanel>
    </Box>
  );
}
export default Hero