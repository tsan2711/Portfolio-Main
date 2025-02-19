import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechElement = ({ icon, label, floating, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center"
      variants={fadeIn("up", "spring", index * 0.3, 0.75)} // Hiệu ứng xuất hiện
      animate={{
        scale: isHovered ? 1.4 : 1, // Khi hover, phóng to nhưng không thu nhỏ lại
      }}
      transition={{
        y: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        scale: { duration: 0.15 }, // Tăng tốc độ phóng to khi hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-20 h-20 rounded-full flex justify-center items-center shadow-lg border-2 border-gray-300 hover:cursor-pointer hover:border-light-orange"
        style={{
          background: "rgba(255, 255, 255, 0.2)", // Làm vòng tròn mờ
          backdropFilter: "blur(10px)", // Hiệu ứng mờ cho vòng tròn
        }}
      >
        <img src={icon} alt={label} className="w-10 h-10 object-contain filter brightness-110" />
      </div>

      {/* Hiển thị tên công nghệ khi hover */}
      {isHovered && (
        <motion.span
          className="absolute bottom-full mb-2 px-2 py-1 bg-light-orange text-white text-sm rounded-md shadow-md"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 0.15 }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
};

export default TechElement;
