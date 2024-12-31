import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviewsData = [
    {
        category: "Technology",
        content:
            "The ultimate platform for storytelling innovation. JS, a hidden gem of innovation, deserves more appreciation.",
        user: {
            name: "Pryank Agrawal",
            description: "Founder & CEO, Housewise.in | IIT Alumni",
            avatar: "",
        },
    },
    {
        category: "Technology",
        content:
            "Unlock creativity with Journeystory, the premier storytelling platform. JS's groundbreaking innovation often goes unnoticed, but its brilliance shines through.",
        user: {
            name: "Ajay Kalantri",
            description: "Founder & CEO, bookdoctorstime.com | BITS Pilani",
            avatar: "",
        },
    },
    {
        category: "Technology",
        content:
            "Experience storytelling excellence on Journeystory – unmatched innovation. JS, an underappreciated marvel, redefines the art of storytelling.",
        user: {
            name: "Ashwin Srivastva",
            description: "Forbes 30 under 30 | IIT Bombay Alumni",
            avatar: "",
        },
    },
];

const ReviewSection = () => {
    const containerWidth = reviewsData.length * 300; // Assuming each card is 300px wide

    return (
        <section className='flex flex-col gap-4 overflow-hidden  mx-auto w-[100%] mt-20'>
            <h2 className='text-4xl font-extrabold text-center'>
                Customer Reviews
            </h2>
            <div className='relative w-full overflow-hidden'>
                <motion.div
                    className='flex gap-4'
                    style={{ width: `${containerWidth * 2}px` }} // Double the width to accommodate duplicated cards
                    animate={{ x: [0, -(containerWidth * (50 / 100))] }} // Move the width of the original container
                    transition={{
                        repeat: Infinity,
                        duration: 50,
                        ease: "linear",
                    }} // Infinite loop with 50 seconds duration
                >
                    {reviewsData.concat(reviewsData).map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewSection;
