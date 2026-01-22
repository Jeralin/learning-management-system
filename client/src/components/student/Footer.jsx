import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-black/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img
            src={assets.logo}
            className="w-9 sm:w-28 lg:w-20 h-16 cursor-pointer"
            alt="logo"
          />
          <p className="mt-6 text-center md:text-left text-sm text-black/80">
            Skillup is your personal learning hub to gain in-demand skills and
            accelerate your career. From coding and design to business and
            communication, learn from industry experts at your own pace.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-black/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold mb-5">
            Stay in the loop with new courses and learning tips.
          </h2>
          <p className="text-sm text-black/80">
            Stay updated! Subscribe to receive the latest course alerts and
            updates.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-white/80 bg-gray-100 text-black placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button className="bg-orange-500 w-24 h-9 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-black/60">
        Copyright 2026 © Skillup. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
