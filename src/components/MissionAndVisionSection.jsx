import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";

const MissionAndVisionSection = () => {
    return (
        <motion.div
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className='gap-8 mt-20 grid md:grid-cols-[3fr_2fr] bg-transparent w-[90%] lg:w-[70%] md:w-[80%] mx-auto'
        >
            <div className='flex flex-col gap-6'>
                <div className='flex gap-4'>
                    <HiRectangleStack className='min-w-8 min-h-8 bg-purple-900 text-purple-500 rounded-full p-1' />
                    <div>
                        <h3 className='text-md font-semibold'>Our Vision</h3>
                        <p className='text-md text-gray-600'>
                            We embrace a holistic approach to the art of
                            podcasting, curating a platform where creators and
                            listeners alike can engage in meaningful
                            conversations. We aspire to be pioneers in shaping
                            the future of podcasting, offering a space where
                            creators and listeners alike can explore,
                            entertainment.
                        </p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <HiRectangleStack className='min-w-8 min-h-8 bg-purple-900 text-purple-500 rounded-full p-1' />
                    <div>
                        <h3 className='text-md font-semibold'>Our Missionn</h3>
                        <p className='text-md text-gray-600'>
                            Our mission is to curate a platform where diverse
                            voices are celebrated, meaningful conversations
                            thrive, and listeners are transported. We are
                            committed to providing a space where creators can
                            share their stories, ideas, and expertise freely,
                            knowing that their diverse narratives.
                        </p>
                    </div>
                </div>
            </div>
            <div className='pb-0 pt-2 px-4 flex-col w-full md:w-[300px]'>
                <Image
                    alt='Card background'
                    className='object-cover md:w-[500px] w-full'
                    src='https://framerusercontent.com/images/7C3BqjPx1luKJkwFa4fu6Y5GHWY.jpg'
                />
            </div>
        </motion.div>
    );
};

export default MissionAndVisionSection;
