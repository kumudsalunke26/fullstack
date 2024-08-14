import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
import { LuChevronsDown } from "react-icons/lu";
const subscriptionDetails = [
    {
        title: "Family Plan",
        description:
            "Unleash a world of audio excellence with our Individual Plan.",
        price: "$ 29.00 USD",
        features: [
            "Unlimited Access",
            "Ad-Free Listening",
            "High-Quality Streaming",
            "Exclusive Early Access",
        ],
    },
    {
        title: "Duo Plan",
        description:
            "Experience the joy of shared listening with our Duo Plan.",
        price: "$ 45.00 USD",
        features: [
            "Unlimited Access",
            "Shared Experience",
            "Synchronized Playback",
            "Personalized Recommendations",
            "Ideal for Pairs",
        ],
    },
    {
        title: "Family Plan",
        description:
            "All the features of Duo Plan, this subscription extends to five family members.",
        price: "$ 65.00 USD",
        features: [
            "All Duo Plan Features",
            "Up to Five Members",
            "Parental Controls",
            "Multi-Device Streaming",
            "Comprehensive Analytics",
        ],
    },
];
const SubscriptionSection = () => {
    return (
        <div className='w-[90%] md:w-[80%] mx-auto flex gap-4'>
            <div className='flex gap-6 flex-col'>
                <div className='flex flex-col md:flex-row gap-10 w-full'>
                    <h1 className='text-mainText text-4xl font-bold whitespace-nowrap'>
                        Subscription Plans
                    </h1>
                    <div className='text-md'>
                        <p className='text-mainText'>
                            We are a collective of passionate dedicated to
                            delivering immersive audio experiences that resonate
                            with your heart & mind.
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-3 bg-background p-4 rounded-md w-[100%] min-h-[500px] overflow-hidden'>
                    {subscriptionDetails.map((subscription, index) => (
                        <motion.div
                            initial={{ y: "30%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='flex flex-col gap-6 justify-between h-full'
                        >
                            <div className='text-md text-primary'>
                                {subscription.title}
                            </div>
                            <div className='text-md text-mainText'>
                                {subscription.description}
                            </div>
                            <LuChevronsDown className='min-w-10 min-h-10 text-primary' />
                            <div className='text-xl md:text-2xl text-mainText font-bold'>
                                {subscription.price}
                            </div>
                            <ul>
                                {subscription.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className='flex items-center gap-2 text-mainText'
                                    >
                                        <FaStarOfLife className='min-h-1 min-w-1 text-xs text-primary' />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className='w-full rounded-full text-mainText bg-transparent border border-primary'>
                                Purchase to continue
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionSection;
