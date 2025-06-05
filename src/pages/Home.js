import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero min-h-screen mt-5 mb-5 rounded overflow-hidden shadow-lg"
      style={{ backgroundImage: 'url("../images/me.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hero-content text-center text-neutral-content"
      >
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Welcome to my Portfolio</h1>
          <p className="mb-4">
            I'm Kacper Agatowski — a Computer Science graduate based in Dublin, Ireland.
          </p>
          <p className="mb-5">
            My strong suits are working with React, FastAPI, and full-stack web development. I've also gained experience in data analytics, visualization, and building AI models to solve real-world problems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <button className="btn btn-primary">About Me</button>
            </Link>
            <Link to="/projects/home">
              <button className="btn btn-secondary">My Projects</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
