import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SoundWave = () => {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        const updateBars = () => {
            const screenWidth = window.innerWidth;
            let numberOfBars;
            if (screenWidth > 1200) {
                numberOfBars = 55;
            } else if (screenWidth > 800) {
                numberOfBars = 40;
            } else if (screenWidth > 600) {
                numberOfBars = 30;
            } else {
                numberOfBars = 20;
            }
            setBars(
                Array.from({ length: numberOfBars }, (_, index) => index + 1)
            );
        };

        updateBars();
        window.addEventListener("resize", updateBars);

        return () => {
            window.removeEventListener("resize", updateBars);
        };
    }, []);

    return (
        <div className='flex items-center justify-center space-x-2 h-[440px] py-20 overflow-hidden'>
            {bars.map((bar, index) => (
                <motion.div
                    key={index}
                    className='w-5 bg-secondary rounded-lg'
                    initial={{ height: "100px" }}
                    animate={{
                        height: ["100px", "300px", "100px"],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.2,
                    }}
                />
            ))}
        </div>
    );
};

export default SoundWave;
