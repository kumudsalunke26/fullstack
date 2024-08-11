import React from "react";
import { motion } from "framer-motion";
import ReviewCard from "./ReviewCard";

const reviewsData = [
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        },
    },
    {
        category: "Product",
        content: "I love the quality of the products!",
        user: {
            name: "Jane Doe",
            description: "Product Designer",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
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
                    animate={{ x: [0, -containerWidth] }} // Move the width of the original container
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
