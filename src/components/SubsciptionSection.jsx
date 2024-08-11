import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const SubsciptionSection = () => {
    return (
        <motion.div
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className='gap-8 mt-20 flex flex-col lg:flex-row bg-transparent w-[90%] lg:w-[70%] md:w-[80%] mx-auto'
        >
            <div className='pb-0 pt-2 px-4 flex-col w-full md:w-[500px]'>
                <Image
                    alt='Card background'
                    className='object-cover md:w-[500px] w-full'
                    src='https://framerusercontent.com/images/poAVdP1X7ojkg3A0HgFpJYIfI.png?scale-down-to=512'
                />
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='text-4xl font-bold'>
                    Subscribe for <br />
                    insider insights
                </h3>
                <p className='text-sm text-gray-500'>
                    Subscribe to our newsletter to get the latest news and
                    updates.
                </p>
                <div className='mt-4 flex px-2 py-1 items-center space-x-2 rounded-full bg-[#751269] h-fit w-fit'>
                    <input
                        className='flex-1 px-2 flex-shrink focus:outline-none placeholder-white bg-transparent text-white'
                        placeholder='Enter your email address'
                    />
                    <Button className='text-white rounded-full px-6 py-1 bg-[#290324]'>
                        Subscribe
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default SubsciptionSection;
