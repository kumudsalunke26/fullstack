import React, { memo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog._id}`}
      className="group shadow-md shadow-secondary">
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full overflow-hidden">
        <Card className="bg-transparent text-text w-full h-fit">
          <CardHeader className="w-full h-full flex-col items-start">
            <img
              src={blog.blogImageUrl}
              loading="lazy"
              className="object-cover h-full w-full"
            />
            <div className="flex justify-between w-fit ml-6 bg-white text-black rounded-full px-2 mt-[-10px]">
              <div className="text-sm md:text-md font-bold">Journey Story</div>
            </div>
          </CardHeader>
          <CardBody className="w-full mt-[-25px] flex flex-col gap-2 items-start">
            <h3 className="text-xl md:text-2xl font-bold group-hover:underline">
              {blog.title}
            </h3>
            <h3 className="text-xsm md:text-sm">{blog.description}</h3>
          </CardBody>
        </Card>
      </motion.div>
    </Link>
  );
};

export default memo(Blog);
