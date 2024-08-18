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

const CategoriesList = () => {
    return (
        <div className='my-10 h-20 flex items-center overflow-hidden bg-gradient-to-b from-primary to-background shadow-lg w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <motion.div
                className='flex items-center space-x-4 whitespace-nowrap'
                animate={{ x: ["0%", "-45%"] }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...names, ...names].map((name, index) => (
                    <React.Fragment key={index}>
                        <span className='py-2 px-3 text-center text-md font-normal min-w-max text-mainText'>
                            {name}
                        </span>
                        {index < names.length * 2 - 1 && (
                            <FaStarOfLife className='min-h-3 min-w-3 text-xs text-mainText' />
                        )}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default CategoriesList;
