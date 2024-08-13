import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";

const PodcastOverview = () => {
    return (
        <motion.div
            className='grid lg:grid-cols-[1fr_2fr] gap-4 mt-24 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'
            initial={{ y: "15%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className='grid md:grid-cols-[3fr_2fr_3fr] lg:grid-cols-1 gap-3'>
                <h2 className='text-4xl font-extrabold'>
                    Our <br />
                    Holistic <br />
                    Podcastig
                </h2>
                <p className='text-md text-gray-600'>
                    Delve into the meticulous process behind our podcast
                    production. From scriptwriting to sound engineering.
                </p>
                <ol className='text-md text-gray-600'>
                    <li>1. Navigating Audio Excellence</li>
                    <li>2. Where Stories Set Sail</li>
                    <li>3. Podcast Pioneers in Action</li>
                </ol>
            </div>
            <div className='flex flex-col md:flex-row gap-6 h-full'>
                <div className='w-full h-[600px] md:h-[100%] overflow-hidden'>
                    <img
                        src='https://framerusercontent.com/images/C07mv8pwLCEQbyTaezgpcr5LbN4.png?scale-down-to=1024'
                        className='object-cover w-full h-full'
                    />
                </div>
                <div className='flex flex-col gap-6 justify-center'>
                    <div className='flex gap-4 w-full'>
                        <HiRectangleStack className='min-w-8 min-h-8 bg-purple-900 text-purple-500 rounded-full p-1' />
                        <div>
                            <h3 className='text-md font-semibold'>
                                Unmatched Audio Quality
                            </h3>
                            <p className='text-md text-gray-600'>
                                Experience the difference in audio quality that
                                sets us apart. Our commitment to impeccable
                                sound engineering .
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <HiRectangleStack className='min-w-8 min-h-8 bg-purple-900 text-purple-500 rounded-full p-1' />
                        <div>
                            <h3 className='text-md font-semibold'>
                                Thoughtful Content Curation
                            </h3>
                            <p className='text-md text-gray-600'>
                                We prioritize meaningful topics, providing you
                                with content that not only entertains but also
                                resonates deeply.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <HiRectangleStack className='min-w-8 min-h-8 bg-purple-900 text-purple-500 rounded-full p-1' />
                        <div>
                            <h3 className='text-md font-semibold'>
                                Engaging Community Interaction
                            </h3>
                            <p className='text-md text-gray-600'>
                                Our interactive approach goes beyond the
                                podcast, creating a space where listeners
                                actively engage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PodcastOverview;
