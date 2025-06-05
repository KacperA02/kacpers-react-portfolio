import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const Wrapper = isMobile ? "div" : motion.div; // conditional wrapper

  return (
    <div className="hero bg-base-200 px-4 sm:px-6 py-10 overflow-visible">
      <Wrapper
        initial="offscreen"
        whileInView={!isMobile ? "onscreen" : undefined}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-800">
          About Me
        </h1>

        <Wrapper
          className="flex flex-col lg:flex-row items-center gap-8 mb-12"
          variants={cardVariants}
        >
          <img
            src="../images/profilePic.jpg"
            alt="Kacper Agatowski"
            className="rounded-xl shadow-lg w-full max-w-xs lg:max-w-sm h-auto flex-shrink-0"
          />
          <div className="max-w-xl w-full text-gray-700 leading-relaxed text-base sm:text-lg space-y-4">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-blue-600">Kacper Agatowski</span>{" "}
              — a Computer Science graduate from{" "}
              <a
                href="https://iadt.ie/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline font-semibold"
              >
                IADT Dublin
              </a>
              . I'm hardworking, driven, and passionate about coding — building
              apps that solve real problems and improve lives.
            </p>
            <p>
              I’m always eager to learn and push myself outside my comfort zone
              — not only at work but in everyday life.
            </p>
          </div>
        </Wrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
          {[
            {
              icon: <FaTools className="mr-3 text-2xl" />,
              title: "Skills & Technologies",
              border: "border-blue-500",
              content: (
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
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
              ),
            },
            {
              icon: <FaGraduationCap className="mr-3 text-2xl" />,
              title: "Education",
              border: "border-green-500",
              content: (
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  BSc (Hons) Computing graduate from IADT Dublin (2021–2025). Courses included
                  Web Development, AI, Mobile Apps, Cloud Computing, Data Visualization, and more.
                </p>
              ),
            },
            {
              icon: <FaBullseye className="mr-3 text-2xl" />,
              title: "Career Goals",
              border: "border-purple-500",
              content: (
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  Passionate about backend development, aiming to grow in cybersecurity and AI.
                  Planning to pursue a Master’s degree in Computer Science to deepen expertise and contribute to impactful projects.
                </p>
              ),
            },
            {
              icon: <FaTrophy className="mr-3 text-2xl" />,
              title: "Achievements & Interests",
              border: "border-yellow-500",
              content: (
                <>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    Earned PADI scuba diving license in Thailand, exploring marine ecosystems worldwide.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    Vice-captain of the college football team and captain of the football club, leading and motivating teammates.
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    I believe in a strong work-life balance — when not coding, I enjoy golf and other outdoor activities that keep me energized.
                  </p>
                </>
              ),
            },
          ].map(({ icon, title, border, content }) => (
            <Wrapper
              key={title}
              className={`bg-white rounded-xl shadow-md p-6 border-l-8 hover:shadow-xl transition-shadow duration-300 ${border}`}
              variants={cardVariants}
            >
              <div className={`flex items-center mb-4 ${border.replace('border-', 'text-')}`}>
                {icon}
                <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
              </div>
              {content}
            </Wrapper>
          ))}
        </div>

        <Wrapper
          className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
          variants={cardVariants}
        >
          <Link to="/contact">
            <button className="btn btn-primary transition-colors duration-300">
              Contact Me
            </button>
          </Link>
          <Link to="/certificates">
            <button className="btn btn-secondary transition-colors duration-300">
              View Certificates
            </button>
          </Link>
        </Wrapper>
      </Wrapper>
    </div>
  );
};

export default About;
