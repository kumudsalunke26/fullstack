import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";
import { AiFillClockCircle } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { Image } from "@nextui-org/react";

const Episode = ({ episode }) => {
    return (
        <motion.div
            initial={{ y: "30%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='grid md:grid-cols-[1fr_4fr_4fr] gap-3 p-4 rounded-lg my-4 mx-auto w-[90%] lg:w-[70%] md:w-[80%]'
        >
            <div className='flex flex-row md:flex-col justify-between md:justify-normal text-white text-lg bg-gradient-to-t from-black to-purple-950 h-fit'>
                <div className='flex items-center h-14 gap-2 md:bg-gradient-to-r md:from-[#140412] md:to-[#751269] p-2'>
                    <HiRectangleStack className='text-2xl text-purple-900' />
                    vol {episode.vol}
                </div>
                <div className='flex md:border-t-1 md:border-gray-400 items-center h-14 gap-2 md:bg-gradient-to-r md:from-[#140412] md:to-[#751269] p-2'>
                    <AiFillClockCircle className='text-2xl text-purple-950' />
                    {episode.duration} mins
                </div>
            </div>
            <div className='flex items-start cursor-pointer flex-1'>
                <Image
                    src={episode.thumbnail}
                    alt=''
                    className='min-h-[150px] min-w-[300px] object-cover rounded-none'
                />
            </div>
            <div className='flex flex-col gap-2 justify-between py-1'>
                <div className='text-[#751269] font-semibold text-md'>
                    {episode.genre}
                </div>
                <h2 className='text-2xl font-bold'>{episode.title}</h2>
                <div className='flex gap-2'>
                    <BiPlay className='text-2xl bg-[#751269] text-white rounded-full border-1 border-purple-500' />
                    <div className='text-md text-gray-600'>Host: </div>
                    <div className='text-md text-white'>{episode.host}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Episode;
