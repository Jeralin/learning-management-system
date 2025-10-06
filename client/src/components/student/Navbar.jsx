import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-blue-500 py-4 ${
        isCourseListPage ? "bg-black" : "bg-rose-100/70"
      }`}
    >
      {/* <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 h-16 cursor-pointer flex"
      /> <b className="flex">SKILLUP</b> */}

      <div className="flex items-center space-x-0">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-9 sm:w-28 lg:w-20 h-16 cursor-pointer"
        />
        <b className="text-black">SKILLUP</b>
      </div>

      <div className="hidden md:flex items-center gap-5 text-white">
        <div className="flex items-center gap-5 text-black">
          <button>Become a Tutor</button> |{" "}
          <Link to="/my-enrollments">Enrolled Courses </Link>
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-orange-500 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* For Phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-white">
        <div>
          <button>Become a Tutor</button> |{" "}
          <Link to="/my-enrollments">Enrolled Courses </Link>
        </div>
        <button>
          <img src={assets.user_icon} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
