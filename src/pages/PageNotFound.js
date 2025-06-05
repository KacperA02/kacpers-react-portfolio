import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-9xl font-extrabold mb-6">404</h1>
      <p className="text-2xl md:text-3xl mb-4">Oops! Page Not Found.</p>
      <p className="mb-8 max-w-md text-center text-gray-400">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default PageNotFound;
