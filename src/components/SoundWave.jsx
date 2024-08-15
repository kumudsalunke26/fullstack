import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const getRandomScaleValues = () => {
  const min = 1;
  const max = 3;
  return [
    1,
    parseFloat((Math.random() * (max - min) + min).toFixed(2)),
    parseFloat((Math.random() * (max - min) + min).toFixed(2)),
  ];
};

const SoundWave = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    const updateBars = () => {
      const screenWidth = window.innerWidth;
      let numberOfBars;
      if (screenWidth > 1200) {
        numberOfBars = 40;
      } else if (screenWidth > 800) {
        numberOfBars = 30;
      } else if (screenWidth > 600) {
        numberOfBars = 20;
      } else {
        numberOfBars = 10;
      }
      setBars(Array.from({ length: numberOfBars }, (_, index) => index + 1));
    };

    updateBars();
    window.addEventListener("resize", updateBars);

    return () => {
      window.removeEventListener("resize", updateBars);
    };
  }, []);

  return (
    <div className="flex items-center justify-center space-x-2 h-[440px] py-20 overflow-hidden">
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          className="w-5 bg-secondary rounded-lg h-[100px]"
          initial={{ scaleY: 1 }}
          animate={{
            scaleY: getRandomScaleValues(), // Apply random scale values for each bar
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default SoundWave;
