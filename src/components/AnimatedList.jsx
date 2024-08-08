// src/RotatingNames.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
const names = [
    "Lifestyles",
    "Technology",
    "Health",
    "Comedy",
    "Entertainment",
    "Business",
    "Politics",
    "Arts",
];

const AnimatedList = () => {
    return (
        <div className='my-10 h-20 flex items-center mx-auto w-[80%] overflow-hidden bg-gradient-to-b from-blue-900 to-black shadow-lg'>
            <div className='relative flex overflow-hidden'>
                <motion.div
                    className='flex space-x-4 whitespace-nowrap items-center'
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ width: "200%" }}
                >
                    {names.map((name, index) => (
                        <React.Fragment key={`first-${index}`}>
                            <span className='py-2 px-3 text-center text-md font-normal min-w-max text-white'>
                                {name}
                            </span>
                            {index < names.length - 1 && (
                                <FaStarOfLife className='text-xs text-white' />
                            )}
                        </React.Fragment>
                    ))}
                    {names.map((name, index) => (
                        <React.Fragment key={`second-${index}`}>
                            <span className='py-2 px-3 text-center text-md font-normal min-w-max text-white'>
                                {name}
                            </span>
                            {index < names.length - 1 && (
                                <FaStarOfLife className='text-xs text-white' />
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default AnimatedList;
