import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  console.log("Course received in CourseCard:", course);

  return (
    <Link
      to={"/course/" + course?._id}
      onClick={() => scrollTo(0, 0)}
      className="border border-rose-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course?.courseThumbnail} alt="" />
      <div className="p-3 text-left">
        <h3 className="text-white text-base font-semibold">
          {course?.courseTitle}
        </h3>
        <p className="text-white">Spidey</p>
        <div className="flex items-center space-x-2">
          <p className="text-white">{calculateRating(course ?? {})}</p>
          <div className="flex">
            {/* {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculateRating(course))
                    ? assets.star
                    : assets.star_blank
                }
                className="w-3.5 h-3.5"
              />
            ))} */}

            {/* ======= ChatGpt ====== */}

            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i <
                  Math.floor(calculateRating(course ?? { courseRatings: [] }))
                    ? assets.star
                    : assets.star_blank
                }
                className="w-3.5 h-3.5"
                alt="star"
              />
            ))}

            {/* End */}
          </div>
          {/* <p className="text-white">{course.courseRatings.length}</p> */}
          {/* Chatgpt */}

          <p className="text-white">{course?.courseRatings?.length ?? 0}</p>

          {/* End */}
        </div>
        <p className="text-white text-base font-semibold">
          {currency}
          {(
            course?.coursePrice -
            (course?.discount * course?.coursePrice) / 100
          ).toFixed(2)}{" "}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
