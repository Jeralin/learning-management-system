import express from "express";
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudentsData,
  updateRoleToEducator,
} from "../controllers/educatorController.js";
import upload from "../configs/multer.js";
import { protectEducator } from "../middlewares/authMiddleware.js";

const educatorRouter = express.Router();

// Add Educator Role
educatorRouter.get("/update-role", updateRoleToEducator);
educatorRouter.post(
  "/add-course",
  upload.single("image"),
  protectEducator,
  addCourse
);
educatorRouter.get("/courses", protectEducator, getEducatorCourses);
educatorRouter.get("/dashboard", protectEducator, educatorDashboardData);
educatorRouter.get(
  "/enrolled-students",
  protectEducator,
  getEnrolledStudentsData
);

export default educatorRouter;

// {"courseTitle": "Introduction to JavaScript",
//     "courseDescription":
//       "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
//     "coursePrice": 49.99,

//     "discount": 20,
//     "courseContent": [
//       {
//         "chapterId": "chapter1",
//         "chapterOrder": 1,
//         "chapterTitle": "Getting Started with JavaScript",
//         "chapterContent": [
//           {
//             "lectureId": "lecture1",
//             "lectureTitle": "What is JavaScript?",
//             "lectureDuration": 16,
//             "lectureUrl": "https://youtu.be/pN6jk0uUrD8",
//             "isPreviewFree": true,
//             "lectureOrder": 1,
//           },] } ] }
