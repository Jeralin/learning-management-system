import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-100">
        Achieve excellence through experts
      </h2>
      <p className="text-white text-sm md:text-base mt-3">
        Turn your curiosity into skill. Explore courses in coding, <br />{" "}
        design, business, and beyond — built to help you thrive.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-white border border-cyan-500/70 px-10 py-3 rounded"
      >
        View All Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
