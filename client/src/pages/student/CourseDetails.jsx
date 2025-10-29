// import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCoursrData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const {
    allCourses,
    calculateRating,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
  } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCoursrData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-[500px]  bg-gradient-to-b from-orange-200/70"></div>
        {/* Left column */}
        <div className="max-w-xl z-10 text-white">
          <h1 className="md:text-3xl text-2xl font-semibold text-gray-100">
            {courseData?.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData?.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* review and ratings */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p className="text-white">{calculateRating(courseData ?? {})}</p>
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
                    Math.floor(
                      calculateRating(courseData ?? { courseRatings: [] })
                    )
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

            <p className="text-orange-500">
              ({courseData?.courseRatings?.length ?? 0}{" "}
              {courseData?.coureRatings?.length > 1 ? "ratings" : "rating"})
            </p>

            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"}
            </p>

            {/* End */}
          </div>

          <p className="text-sm">
            Course by <span className="text-orange-500 underline">Spidey</span>
          </p>

          <div className="pt-8 text-gray-100">
            <h2 className="text-xl font-semibold">Learning Roadmap</h2>

            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-orange-500 mb-2 rounded"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transform transition-transform ${
                          openSections[index] ? "rotate-180" : ""
                        }`}
                        src={assets.down_arrow_icon}
                        alt="arrow-icon"
                      />
                      <p className="font-medium md:text-base text-sm">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-sm">
                      {chapter.chapterContent.length} Sessions -
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSections[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 border-t border-orange-500">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1">
                          <img
                            src={assets.play_icon}
                            alt="play-icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-100 text-xs md:text-sm">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                  className="text-orange-500 cursor-pointer"
                                >
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] }
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-20 text-sm">
            <h3 className="text-xl font-semibold text-gray-100">
              Course Description
            </h3>
            <p
              className="pt-3 rich-text"
              dangerouslySetInnerHTML={{
                __html: courseData?.courseDescription,
              }}
            ></p>
          </div>
        </div>

        {/* Right column */}
        <div className="max-w-md z-10 shadow-lg md:rounded-none overflow-hidden bg-black min-w-[300px] sm:min-w-[420px]">
          {playerData ? (
            <YouTube
              videoId={playerData.videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} alt="" />
          )}
          {/* Confusion */}

          {/* End C */}

          {/* {playerData ? (
            <YouTube
              videoId={playerData.videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} alt="" />
          )} */}

          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt="time left clock icon"
              />
              {/* {playerData ? (
                <YouTube
                  videoId={playerData.videoId}
                  opts={{
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  iframeClassName="w-full aspect-video"
                />
              ) : (
                <img
                  className="w-3.5"
                  src={assets.time_left_clock_icon}
                  alt="time left clock icon"
                />
              )} */}

              <p className="text-green-500">
                Offer ends in <span className="font-medium"> 5 days</span> —
                grab your spot now!
              </p>
            </div>

            <div className="flex gap-3 items-center pt-2">
              <p className="text-gray-100 md:text-4xl text-2xl font-semibold">
                {currency}{" "}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="text-white md:text-lg line-through">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="text-white md:text-lg">
                {courseData.discount} % off
              </p>
            </div>

            <div className="flex items-center text-sm gap-4 pt-2 md:pt-4 text-white">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>
              <div className="h-4 w-px bg-white/40"></div>

              <div className="flex items-center gap-1">
                <img
                  className=""
                  src={assets.time_clock_icon}
                  alt="clock icon"
                />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-white/40"></div>

              <div className="flex items-center gap-1">
                <img className="" src={assets.lesson_icon} alt="clock icon" />
                <p>{calculateNoOfLectures(courseData)} sessions</p>
              </div>
            </div>

            <button className="md:mt-6 mt-4 w-full py-3 rounded bg-orange-500 font-medium">
              {isAlreadyEnrolled ? "Access Granted" : "Enroll now"}
            </button>

            <div className="pt-6">
              <p className="md:text-xl text-lg font-medium text-gray-100">
                Course overview
              </p>
              <ul className="text-white ml-4 pt-2 text-sm list-disc">
                <li>Lifetime access ✓ Free updates.</li>
                <li>Learn comfortably at your own speed.</li>
                <li>Earn a shareable certificate when you finish.</li>
                <li>Enjoy dedicated support to clarify your doubts anytime.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
