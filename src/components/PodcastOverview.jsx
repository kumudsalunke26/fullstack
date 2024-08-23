import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { HiRectangleStack } from "react-icons/hi2";
import AryanImage from "../assets/AryanImage.png";

const PodcastOverview = () => {
    return (
      <motion.div
        className="grid lg:grid-cols-[1fr_2fr] gap-4 mt-24 w-[90%] lg:w-[70%] md:w-[80%] mx-auto"
        id="about"
        initial={{ y: "15%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="grid md:grid-cols-[3fr_2fr_3fr] lg:grid-cols-1 gap-3">
          <h2 className="text-4xl font-extrabold">
            The <br />
            Journey <br />
            has a story
          </h2>
          <p className="text-md text-mainText">
            Journey Story was created to inspire through real-life experiences
            of entrepreneurs and leaders, offering insights and motivation for
            personal and professional growth.
          </p>
          <ol className="text-md text-mainText">
            <li>1. Navigating Audio Excellence</li>
            <li>2. Where Stories Set Sail</li>
            <li>3. Podcast Pioneers in Action</li>
          </ol>
        </div>
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <div className="w-full h-[450px] md:h-[100%] overflow-hidden">
            <img
              loading="lazy"
              src={AryanImage}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex gap-4 w-full">
              <HiRectangleStack className="min-w-8 min-h-8 text-primary rounded-full p-1" />
              <div>
                <h3 className="text-md font-semibold">
                  Inspirational Interviews
                </h3>
                <p className="text-md text-mainText">
                  Dive into exclusive interviews with top entrepreneurs, CEOs,
                  and industry leaders, uncovering the secrets behind their
                  success stories.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <HiRectangleStack className="min-w-8 min-h-8 text-primary rounded-full p-1" />
              <div>
                <h3 className="text-md font-semibold">Diverse Perspectives</h3>
                <p className="text-md text-mainText">
                  Explore a wide range of journeys from individuals across
                  different sectors, offering unique insights and strategies
                  that cater to all walks of life.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <HiRectangleStack className="min-w-8 min-h-8 text-primary rounded-full p-1" />
              <div>
                <h3 className="text-md font-semibold">Growing Community</h3>
                <p className="text-md text-mainText">
                  Join over 50,000 listeners who are part of a thriving
                  community, continuously inspired and motivated by the wealth
                  of knowledge shared on our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
};

export default PodcastOverview;
