import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } =
    useContext(AppContext);

  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate("/educator");
        return;
      }
      const token = await getToken();
      const { data } = await axios.get(
        backendUrl + "/api/educator/update-role",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-rose-700 py-4 ${
        isCourseListPage ? "bg-rose-900" : "bg-rose-900"
      }`}
    >
      {/* <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 h-16 cursor-pointer flex"
      /> <b className="flex">SKILLUP</b> */}

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

      <div className="hidden md:flex items-center gap-5 text-white">
        <div className="flex items-center gap-5 text-white">
          {user && (
            <>
              <button onClick={becomeEducator}>
                {isEducator ? "Tutor Dashboard" : "Become Tutor"}
              </button>{" "}
              | <Link to="/my-enrollments">Enrolled Courses </Link>{" "}
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-orange-500 text-black px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* For Phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-black">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={becomeEducator}>
                {isEducator ? "Tutor Dashboard" : "Become Tutor"}
              </button>{" "}
              | <Link to="/my-enrollments">Enrolled Courses </Link>{" "}
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="" />{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
