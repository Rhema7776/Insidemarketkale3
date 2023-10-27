import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  // padding: "20px",
  color: "white",
  background: "",
  opacity: "100",
};

const divStyle = {
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  borderTop: "2px white solid",
};
const slideImages = [
  {
    url: require("../images/Content.png"),
    caption:
      "Insidemarket really helped us find what we were looking for quickly",
    fullname: "Emma Jones",
    location: "Akure",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    url: require("../images/Content.png"),
    caption:
      "Insidemarket really makes for comfortable trading. I've experienced it firsthand",
    fullname: "Rhema Chuks",
    location: "Lagos",
    stars: "⭐⭐⭐⭐⭐",
  },
  {
    url: require("../images/Content.png"),
    caption: "I make weekly profit from reselling goods thanks to Insidemarket",
    fullname: "Isabella Garos",
    location: "Lagos",
    stars: "⭐⭐⭐⭐⭐",
  },
];

const buttonStyle = {};

const properties = {
  prevArrow: (
    <button className="bg-white xs:max-sm:ml-[63%] sm:max-md:ml-[82%] md:max-lg:ml-[70%] mt-80 lg:max-xl:ml-[77%] xl:max-2xl:ml-[82%] 2xl:max-3xl:ml-[85%] 3xl:ml-[90%]  rounded-full">
      <BsArrowLeftCircle
        size={40}
        className="rounded-full text-orange-500 w-full "
      />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }} className="mt-80 mr-4 ">
      <BsArrowRightCircle
        size={40}
        className="bg-white rounded-full text-orange-500  "
      />
    </button>
  ),
};

const CarouselItem1 = () => {
  return (
    <div className=" container mx-auto  ">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span
                style={spanStyle}
                className="w-full backdrop-blur-lg border-t bg-gradient-to-r from-black xs:max-lg:p-4 lg:max-xl:p-5 xl:max-2xl:p-5 2xl:max-3xl:p-10 3xl:p-6 "
              >
                <p className="font-bold xs:max-sm:text-sm  sm:max-md:text-md lg:max-xl:text-xl xl:max-2xl:text-2xl mb-4 block ">
                  <i className="">"</i>
                  {slideImage.caption}
                  <i>"</i>
                </p>
                <p className="font-extrabold mb-2 block  text-3xl xs:max-lg:text-2xl ">
                  {slideImage.fullname}
                </p>
                <p className="font-extrabold text-xs ">{slideImage.location}</p>
                <p className="font-extrabold  text-xs ">{slideImage.stars}</p>
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default CarouselItem1;
