import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-rose-900">
      <h1 className="md:text-5xl text-[1.75rem] relative font-bold text-white max-w-3xl mx-auto">
        Transform your tomorrow with{" "}
        <span className="text-orange-600"> personalized learning today.</span>{" "}
        {/* <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        /> */}
      </h1>

      <p className="md:block hidden text-orange-500 max-w-2xl mx-auto">
        Your growth journey starts here — with skilled instructors, dynamic
        learning tools, and a community built for success.
      </p>

      <p className="md:hidden text-orange-500 max-w-sm mx-auto">
        Master new skills with guidance from world-class mentors.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
