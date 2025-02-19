import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) onLoadingComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-50"
      style={{ background: 'linear-gradient(180deg, #3D2C24, #1B1B1B)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo với hiệu ứng pulse và glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-[#A56A5C] text-5xl font-bold relative"
        style={{
          textShadow: '0 0 15px rgba(165, 106, 92, 0.5)',
        }}
      >
        Welcome ✨🐽
      </motion.div>

      {/* Loading bar với gradient và glow effect */}
      <div className="relative mt-8 w-[300px] h-2 bg-[#2D2016] rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 h-full w-1/2 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #A56A5C, transparent)',
            boxShadow: '0 0 10px rgba(165, 106, 92, 0.5)',
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="mt-4 text-[#A56A5C] text-sm"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;