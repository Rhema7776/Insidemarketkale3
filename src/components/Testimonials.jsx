
import React, { useState } from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  
} from "@material-tailwind/react";


export function Testimonials() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "",
      value: "html",
      Header: "Post your Requests",
      desc: `Post what you want to buy, whether in text, images or voice`,
      img: require("../images/Content (3).png")
    },
    {
      label: "",
      value: "react",
      Header: "Sellers Respond with Offers",
      desc: `Within minutes, sellers Respond to your posts and give you offers `,
      img: require("../images/Content (4).png")
    },
    {
        label: "",
        value: "react",
        Header: "Choose your seller and buy",
        desc: `Connect with your chosen seller, chat, negotiate, and finalize deals within the app`,
        img: require("../images/Content (5).png")
    }
  ];
  return (
    <Tabs value={activeTab} className="grid  md:grid-cols-2  flex-col items-center px-12 bg-blue-500">

        <div className="bg-red-300 ">
            <TabsHeader
                className=" rounded-none border-b border-blue-gray-50 bg-green-200  items-start p-0"
                indicatorProps={{
                className:
                    "shadow-none rounded-none  ",
                }}
            >
                {data.map(({ label, value }) => (
                <Tab
                    key={value}
                    value={value}
                    onClick={() => setActiveTab(value)}
                    className={ 
                    activeTab === value
                        ? "text-gray-900   border-orange-500 border-b-2 "
                        : ""
                    }
                >
                    <p className="capitalize">{label}</p>
                </Tab>
                ))}
            </TabsHeader>
            
            <TabsBody>
                {data.map(({ value, desc, Header}) => (
                <TabPanel key={value} value={value}>
                    <h1 className="text-4xl font-extrabold">{Header}</h1>
                    <p>{desc}</p>

                </TabPanel>
                ))}
            </TabsBody>
        </div>
      
        <TabsBody className="bg-cyan-200">
            {data.map(({ value, desc, Header, img}) => (
            <TabPanel key={value} value={value}>
                <img  src={img} alt="" className=""/>
            </TabPanel>
            ))}
        </TabsBody>
      
    </Tabs>
  );
}



