import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import subcribeImage from "../assets/SubscribeImage.png";

const SubsciptionSection = () => {
    return (
        <motion.div
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className='gap-8 mt-20 flex flex-col lg:flex-row bg-transparent w-[90%] lg:w-[70%] md:w-[80%] mx-auto'
        >
            <div className='pb-0 pt-2 px-4 flex-col h-[250px] md:w-[50%]'>
                <img
                    alt='Card background'
                    className='object-cover h-full w-full'
                    src={subcribeImage}
                />
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='text-4xl font-bold'>
                    Subscribe our <br />
                    YouTube Channel
                </h3>
                <p className='text-sm text-mainText'>
                    Subscribe for update episodes
                </p>
                <Button className='text-mainText rounded-full px-6 py-1 bg-primary'>
                    <a
                        target='_blank'
                        href='https://www.youtube.com/channel/UCO0mVgRyCGWXOqmJ3UukIlg'
                        rel='noopener noreferrer'
                        className='text-center w-full'
                    >
                        Subscribe
                    </a>
                </Button>
            </div>
        </motion.div>
    );
};

export default SubsciptionSection;
