import { motion } from "framer-motion";
import { AiFillClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { memo } from "react";

const Episode = ({ episode }) => {
    return (
      <Link
        to={episode.EpisodeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group">
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-[1fr_4fr_4fr] gap-3 p-4 rounded-lg my-4">
          <div className="flex flex-row md:flex-col justify-between md:justify-normal text-mainText text-lg bg-gradient-to-t from-background to-primary h-fit">
            <div className="flex md:border-t-1 md:border-secondary items-center h-14 gap-2 md:bg-gradient-to-r md:from-background md:to-primary p-2">
              <AiFillClockCircle className="text-2xl text-mainText" />
              {episode.duration} mins
            </div>
          </div>
          <div className="flex items-start min-h-[200px] w-[100%] md:min-w-[300px]">
            <img
              src={episode.thumbnail}
              alt="episode thumbnail"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 py-1">
            <div className="text-primary font-semibold text-md">
              {episode.category}
            </div>
            <h2 className="text-2xl font-bold group-hover:underline">
              {episode.title}
            </h2>
          </div>
        </motion.div>
      </Link>
    );
};

export default memo(Episode);
