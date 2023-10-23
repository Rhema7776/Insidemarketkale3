import React from "react";
import featuredicon from "../images/Featured icon.png";
import {div} from "@material-tailwind/react";

const Ourgoal = () => {
  return (
    <div className="bg-gray-100 py-28 xs:max-lg:px-3">
      <div className="container  grid md:grid-cols-2 gap-4 mx-auto flex-col">
      <div>
        <img className="mb-3 block" src={featuredicon} alt="" />

        <h1 className="font-bold text-3xl ">
          Our goal is to simplify your search <br /> and make your buying and
          service-seeking experience hassle-free.
        </h1>
      </div>
      <div>
        <p className="mb-6 block text-gray-500 text-sm">
          Simply post your request on InsideMarket, and our platform will match
          you with sellers who have what you need. You can also post your
          service request, and watch as qualified service providers reach out to
          assist you.
        </p>

        <h1 className="font-bold text-2xl mb-4 block" >Creating a dynamic marketplace for all your needs.</h1>
        <p className="text-gray-500 text-sm ">
          Our mission is to connect buyers and service seekers with sellers and
          providers, creating a dynamic marketplace for all your needs. Whether
          you're looking for a rare collectible, a specialized service, or
          everyday essentials, InsideMarket is the place to be.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Ourgoal;
