import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";
import { AiFillClockCircle } from "react-icons/ai";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const Episode = ({ episode }) => {
    return (
        <Link to={`/episodes/${episode.id}`} className='group'>
            <motion.div
                initial={{ y: "30%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='grid md:grid-cols-[1fr_4fr_4fr] gap-3 p-4 rounded-lg my-4'
            >
                <div className='flex flex-row md:flex-col justify-between md:justify-normal text-mainText text-lg bg-gradient-to-t from-background to-primary h-fit'>
                    <div className='flex items-center h-14 gap-2 md:bg-gradient-to-r md:from-background md:to-primary p-2'>
                        <HiRectangleStack className='text-2xl text-primary' />
                        vol {episode.vol}
                    </div>
                    <div className='flex md:border-t-1 md:border-secondary items-center h-14 gap-2 md:bg-gradient-to-r md:from-background md:to-primary p-2'>
                        <AiFillClockCircle className='text-2xl text-primary' />
                        {episode.duration} mins
                    </div>
                </div>
                <div className='flex items-start min-h-[200px] w-[100%] md:min-w-[300px]'>
                    <img
                        src={episode.thumbnail}
                        alt='episode thumbnail'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='flex flex-col gap-2 justify-between py-1'>
                    <div className='text-primary font-semibold text-md'>
                        {episode.genre}
                    </div>
                    <h2 className='text-2xl font-bold group-hover:underline'>
                        {episode.title}
                    </h2>
                    <div className='flex gap-2'>
                        <BiPlay className='text-2xl bg-primary text-white rounded-full border-1 border-secondary' />
                        <div className='text-md text-mainText'>Host: </div>
                        <div className='text-md text-mainText'>
                            {episode.host}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default Episode;
