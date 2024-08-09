import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";
import { AiFillClockCircle } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";

const Episode = ({ episode }) => {
    return (
        <motion.div
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='grid md:grid-cols-[1fr_4fr_4fr] gap-1 space-x-4 p-4 rounded-lg my-4'
        >
            <div className='flex flex-row md:flex-col justify-between md:justify-normal text-white text-lg bg-gradient-to-t from-black to-purple-950 h-fit'>
                <div className='flex items-center h-14 gap-2 md:bg-gradient-to-r md:from-black md:to-purple-950 p-2'>
                    <HiRectangleStack className='text-2xl text-purple-900' />
                    vol {episode.vol}
                </div>
                <div className='flex md:border-t-1 md:border-gray-400 items-center h-14 gap-2 md:bg-gradient-to-r md:from-black md:to-purple-950 p-2'>
                    <AiFillClockCircle className='text-2xl text-purple-950' />
                    {episode.duration} mins
                </div>
            </div>
            <div className='flex items-start'>
                <img src={episode.thumbnail} alt='' />
            </div>
            <div className='flex flex-col gap-2 justify-between py-1'>
                <div className='text-purple-800 font-semibold text-md'>
                    {episode.genre}
                </div>
                <h2 className='text-2xl font-bold'>{episode.title}</h2>
                <div className='flex gap-2'>
                    <BiPlay className='text-2xl bg-purple-950 text-white rounded-full border-1 border-purple-500' />
                    <div className='text-md text-gray-600'>Host: </div>
                    <div className='text-md text-white'>{episode.host}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Episode;
