import { useState } from "react";
import { Image } from "@nextui-org/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HostCard = ({ item, index, hoverValue, handleHover }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (!e.target.closest("a")) {
            navigate(`/host/${item.id}`);
        }
    };

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative cursor-pointer w-[300px] overflow-hidden'
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
        >
            <div className='h-full w-full overflow-hidden'>
                <Image
                    src={item.image}
                    className={`object-cover w-full h-full transition-transform duration-500 ${
                        index === hoverValue ? "scale-110" : ""
                    }`}
                />
            </div>
            <div
                className={`absolute h-full w-full bottom-0 left-0 right-0 flex justify-center items-end transition-all duration-500 z-10 ${
                    index === hoverValue
                        ? "translate-y-0 opacity-100 bg-gradient-to-b from-transparent to-purple-950 bg-opacity-80"
                        : "translate-y-[100%] opacity-100"
                }`}
                onClick={handleClick}
            >
                <div
                    className={`flex justify-between gap-4 px-4 py-2 items-center m-4 h-fit w-full bg-white`}
                >
                    <div>
                        <p className='text-black text-md font-bold mb-1'>
                            {item.name}
                        </p>
                        <p className='text-gray-500 text-md'>{item.genre}</p>
                    </div>
                    <div className='flex space-x-4'>
                        <a
                            href={item.twitter}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-black'
                        >
                            <FaTwitter size={25} />
                        </a>
                        <a
                            href={item.instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-black'
                        >
                            <FaInstagram size={25} />
                        </a>
                        <a
                            href={item.facebook}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-black'
                        >
                            <FaFacebook size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default HostCard;
