import React, { useContext } from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate} = useContext(AppContext);
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-100 py-3">
      <Link to="/">
      {/* ----Duplicate----- */}

      <div className="flex items-center space-x-0">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="w-9 sm:w-28 lg:w-20 h-16 cursor-pointer"
        />
        <b
          onClick={() => navigate("/")}
          className="text-white md:text-3xl cursor-pointer"
        >
          SKILLUP
        </b>
      </div>


      {/* End */}
        {/* <img
          src={assets.logo}
          alt="Logo"
          className="w-9 sm:w-28 lg:w-20 h-16 cursor-pointer "
        /> */}
        {/* <b
          onClick={() => navigate("/")}
          className="text-white md:text-3xl cursor-pointer"
        >
          SKILLUP
        </b> */}
      </Link>
      <div className="flex items-center gap-5 text-white relative">
        <p className="text-white">Hi! {user ? user.fullName : "Developers"}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className="max-w-8" src={assets.profile_img} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
