import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-white text-xl md:text-4xl font-semibold">
        Knowledge that moves with you.
      </h1>
      <p className="text-white sm:text-sm">
        Learn at your own pace with courses designed for flexibility and growth.
        Whether you’re at home, at work, or on the move, our platform ensures
        learning never stops — helping you gain real skills that fit your
        lifestyle.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        <button className="text-black px-10 py-3 rounded-md bg-orange-600">
          Get started
        </button>
        <button className="text-white flex items-center gap-2">
          Learn more{" "}
          {/* <img className="bg-white" src={assets.arrow_icon} alt="arrow_icon" /> */}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
