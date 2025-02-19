import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center"
    >
      <h1 className="text-6xl font-bold text-light-orange">404</h1>
      <p className="text-gray-600 text-lg mt-4">Oops! The page you are looking for does not exist.</p>
      <img src="/images/404.gif" alt="404" className="w-72 mt-10" />
      <Link to="/" className="mt-6 bg-light-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
        ← Go Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
