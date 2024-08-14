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
            <div className='pb-0 pt-2 px-4 flex-col h-[250px] md:h-full'>
                <img
                    alt='Card background'
                    className='object-cover h-full w-full'
                    src='https://framerusercontent.com/images/poAVdP1X7ojkg3A0HgFpJYIfI.png?scale-down-to=512'
                />
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='text-4xl font-bold'>
                    Subscribe for <br />
                    insider insights
                </h3>
                <p className='text-sm text-mainText'>
                    Subscribe to our newsletter to get the latest news and
                    updates.
                </p>
                <div className='mt-4 flex px-2 py-1 items-center space-x-2 rounded-full bg-primary h-fit w-fit'>
                    <input
                        className='flex-1 px-2 flex-shrink focus:outline-none placeholder-mainText bg-transparent text-mainText'
                        placeholder='Enter your email address'
                    />
                    <Button className='text-mainText rounded-full px-6 py-1 bg-secondary'>
                        Subscribe
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default SubsciptionSection;
