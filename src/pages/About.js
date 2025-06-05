import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaBullseye, FaTrophy } from "react-icons/fa";

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-6 py-10">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800">
          About Me
        </h1>

        {/* Top Section with Image & Intro */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 mb-12"
          variants={cardVariants}
        >
          <img
            src="../images/profilePic.jpg"
            alt="Kacper Agatowski"
            className="rounded-xl shadow-lg max-w-xs w-full"
          />
          <div className="max-w-xl text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              Hi, I'm <span className="font-semibold text-blue-600">Kacper Agatowski</span> — a
              Computer Science graduate from{" "}
              <a
                href="https://iadt.ie/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline font-semibold"
              >
                IADT Dublin
              </a>
              . I'm hardworking, driven, and passionate about coding — building apps that solve real problems and
              improve lives.
            </p>
            <p>
              I’m always eager to learn and push myself outside my comfort zone — not only at work but in everyday life.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border-l-8 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4 text-blue-600">
              <FaTools className="mr-3 text-2xl" />
              <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>
                Strong with <b>React</b>, <b>React Native</b> (mobile apps), and <b>FastAPI</b> backend.
              </li>
              <li>
                Experienced in <b>data analysis</b> (Python Pandas, Matplotlib), and visualization with <b>Tableau</b>, <b>R</b>, <b>JS</b>.
              </li>
              <li>
                Trained ML models with <b>PyTorch</b> and <b>Kaggle</b> for real-world predictions.
              </li>
              <li>
                Skilled in APIs, databases (MySQL, MongoDB), and cloud tech (AWS).
              </li>
              <li>
                Also comfortable with PHP (Laravel), Node.js, Tailwind CSS, and Docker.
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border-l-8 border-green-500 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4 text-green-600">
              <FaGraduationCap className="mr-3 text-2xl" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              BSc (Hons) Computing graduate from IADT Dublin (2021–2025). Courses included
              Web Development, AI, Mobile Apps, Cloud Computing, Data Visualization, and more.
            </p>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border-l-8 border-purple-500 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4 text-purple-600">
              <FaBullseye className="mr-3 text-2xl" />
              <h2 className="text-2xl font-semibold">Career Goals</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Passionate about backend development, aiming to grow in cybersecurity and AI.
              Planning to pursue a Master’s degree in Computer Science to deepen expertise and contribute to impactful projects.
            </p>
          </motion.div>

          {/* Achievements & Interests */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 border-l-8 border-yellow-500 hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
          >
            <div className="flex items-center mb-4 text-yellow-600">
              <FaTrophy className="mr-3 text-2xl" />
              <h2 className="text-2xl font-semibold">Achievements & Interests</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Earned PADI scuba diving license in Thailand, exploring marine ecosystems worldwide.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              Vice-captain of the college football team and captain of the football club, leading and motivating teammates.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              I believe in a strong work-life balance — when not coding, I enjoy golf and other outdoor activities that keep me energized.
            </p>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
          variants={cardVariants}
        >
          <Link to="/contact">
            <button className="btn btn-primary hover:bg-gray-300 hover:text-black transition-colors duration-300">
              Contact Me
            </button>
          </Link>
          <Link to="/certificates">
            <button className="btn btn-secondary hover:bg-gray-300 hover:text-black transition-colors duration-300">
              View Certificates
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
