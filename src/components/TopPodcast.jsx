import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";

const TopPodcast = () => {
    return (
        <Card className='py-4 mx-auto bg-transparent text-mainText grid lg:grid-cols-[2fr_3fr] gap-6 w-[90%] lg:w-[70%] md:w-[80%] shadow-none'>
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className='flex space-x-4'
            >
                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                    <h4 className='font-bold text-3xl'>
                        Navigating the waves of audio excellence
                    </h4>
                </CardHeader>
            </motion.div>
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
                className='flex flex-col md:flex-row justify-center gap-2 flex-1'
            >
                <div className='flex flex-col md:flex-row justify-center gap-2 flex-1 h-full'>
                    <CardBody className='overflow-hidden py-2 flex justify-center md:justify-start h-[600px] md:h-[100%]'>
                        <img
                            alt='Card background'
                            className='object-cover w-full h-full'
                            src='https://img.freepik.com/premium-photo/podcast-live-streaming-microphone-with-sound-wave-magenta-backdrop-vertical-mobile-wallpaper_892776-28637.jpg'
                        />
                    </CardBody>
                    <CardBody className='overflow-visible py-1 flex flex-row md:flex-col gap-4 md:gap-1 justify-between'>
                        <div className='font-semibold'>
                            Total Listeners
                            <h2 className='text-4xl font-bold text-primary'>
                                1.5M
                            </h2>
                        </div>
                        <div>
                            <div className='font-normal text-md'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Sunt dignissimos ducimus
                                veritatis laboriosam ab illo voluptas nemo eaque
                                reiciendis magnam asperiores consequuntur modi
                                nesciunt, iure unde facilis quo necessitatibus.
                                Maiores, totam aut?
                            </div>
                            <div className='my-5'>
                                <ul className='list-disc pl-6'>
                                    <li>
                                        Engaging discussions on various topics
                                    </li>
                                    <li>Insights from industry experts</li>
                                    <li>
                                        Informative and entertaining episodes
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <PrimaryButton
                                    text='Explore Episodes'
                                    toLink='/episodes'
                                />
                            </div>
                        </div>
                    </CardBody>
                </div>
            </motion.div>
        </Card>
    );
};

export default TopPodcast;
