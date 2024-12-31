import { motion } from "framer-motion";
import { AiFillClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { memo } from "react";
import LazyImage from "./LazyImage";
import { Chip } from "@nextui-org/chip";

const Episode = ({ episode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start invisible and below
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 0.5 }} // Duration of the animation
      className="episode" // Add any necessary classes
    >
      <Link
        to={episode?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group">
        <div className="grid md:grid-cols-[1fr_4fr_4fr] gap-3 p-4 rounded-lg my-4">
          <div className="flex flex-row md:flex-col justify-between md:justify-normal text-mainText text-lg bg-gradient-to-t from-background to-primary h-fit">
            <div className="flex md:border-t-1 md:border-secondary items-center h-14 gap-2 md:bg-gradient-to-r md:from-background md:to-primary p-2">
              <AiFillClockCircle className="text-2xl text-mainText" />
              {episode.duration} mins
            </div>
          </div>
          <div className="flex items-start min-h-[200px] w-[100%] md:min-w-[300px] overflow-hidden relative ">
            <LazyImage
              src={episode?.thumbnail.asset.url}
              alt="episode thumbnail"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-4 py-1">
            <div className="text-primary font-semibold text-md">
              {/* {episode.category} */}
              {episode.categories.length > 0 && (
                <Chip
                  color="success"
                  variant="faded"
                  size="md"
                  className="mt-2">
                  {episode.categories[0].title}{" "}
                </Chip>
              )}
            </div>

            <p className="text-xl md:text-2xl font-semibold">
              {episode?.title}
            </p>
            {episode?.description && (
              <p className="text-md ">
                {episode?.description.substr(0, 200)}...
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default memo(Episode);
