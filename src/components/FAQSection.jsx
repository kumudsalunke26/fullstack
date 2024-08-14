import { Image } from "@nextui-org/react";
import FAQAccordion from "./FAQAccordion";
import { motion } from "framer-motion";

const FAQSection = () => {
    return (
        <section className='mt-20 mx-auto w-[90%] lg:w-[70%] md:w-[80%]'>
            <h2 className='text-4xl font-extrabold'>
                Frequently Asked Questions
            </h2>
            <motion.div
                initial={{ y: "30%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='w-full grid sm:grid-cols-[2fr_3fr] gap-4 mt-8 overflow-hidden'
            >
                <img
                    className='object-cover h-[500px] md:h-full w-full'
                    src='https://framerusercontent.com/images/Wel8eucm6iNDyJ74fZd8CuimsAE.png'
                />
                <FAQAccordion />
            </motion.div>
        </section>
    );
};

export default FAQSection;
