import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";
import TopPodcastImage from "../assets/TopPodcast.png";

const TopPodcast = () => {
    return (
      <Card className="py-4 mx-auto bg-transparent text-mainText grid lg:grid-cols-[2fr_3fr] gap-6 w-[90%] lg:w-[70%] md:w-[80%] shadow-none">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex space-x-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-3xl">
              A platform which inspires millions
            </h4>
          </CardHeader>
        </motion.div>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-2 flex-1">
          <div className="flex flex-col md:flex-row justify-center gap-2 flex-1 h-full">
            <CardBody className="overflow-hidden py-2 flex justify-center md:justify-start h-[600px] md:h-[100%]">
              <img
                loading="lazy"
                alt="Card background"
                className="object-cover w-full h-full"
                src={TopPodcastImage}
              />
            </CardBody>
            <CardBody className="overflow-visible py-1 flex flex-row md:flex-col gap-8">
              <div className="font-semibold">
                Total Listeners
                <h2 className="text-4xl font-bold text-primary">50K</h2>
              </div>
              <div>
                <div className="font-normal text-md">
                  Journey Story has a growing community of over 50,000 listeners
                  who tune in for unparalleled insights, inspiration, and
                  wisdom. Be part of the movement and learn from the best in the
                  industry.
                </div>
                <div className="my-5">
                  <ul className="list-disc pl-6">
                    <li>Inspiration Hub</li>
                    <li>Diverse Journeys</li>
                    <li>Expert Insights</li>
                    <li>Entrepreneurial Wisdom</li>
                  </ul>
                </div>
                <div>
                  <PrimaryButton text="Explore Episodes" toLink="/episodes" />
                </div>
              </div>
            </CardBody>
          </div>
        </motion.div>
      </Card>
    );
};

export default TopPodcast;
