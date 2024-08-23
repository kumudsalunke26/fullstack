import React, { memo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LazyImage from './LazyImage';

const Blog = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`} className="group">
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full overflow-hidden">
        <Card className="bg-transparent text- w-full h-fit pb-4 px-0">
          <CardHeader className="w-full aspect-w-16 aspect-h-9 flex-col items-start">
            <LazyImage
              src={blog.blogImageUrl}
              className="object-cover h-full w-full"
              alt={blog.title}
            />
          </CardHeader>
          <CardBody className="w-full mt-[-25px] flex flex-col gap-2 items-start">
            <Chip color="success" variant="faded" size="md" className="mt-2">
              Success Stories
            </Chip>
            <h3 className="text-xl md:text-2xl font-semibold p-0">
              {blog?.title.substr(0, 100)}
            </h3>
            <p className="text-md md:text-md">
              {blog?.description.substr(0, 200)}...
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </Link>
  );
};

export default memo(Blog);
