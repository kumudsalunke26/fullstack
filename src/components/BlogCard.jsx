import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Chip } from "@nextui-org/react";
import LazyImage from "./LazyImage";

const Blog = ({ blog }) => {
  return (
    <Link
      to={`https://blogs.journeystory.in/post/${blog.slug.current}`}
      className="group"
    >
      <motion.div
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full overflow-hidden"
      >
        <Card className="bg-transparent text-w-full h-fit pb-4 px-0">
          <CardHeader className="w-full aspect-w-16 aspect-h-9 flex-col items-start">
            {blog.mainImage?.asset?.url ? (
              <LazyImage
                src={blog.mainImage.asset.url}
                className="object-cover h-full w-full"
                alt={blog.title}
              />
            ) : (
              <div
                className="w-full h-full bg-gray-300"
                aria-label="No image available"
              >
                {/* Optionally add a placeholder or fallback here */}
              </div>
            )}
          </CardHeader>
          <CardBody className="w-full mt-[-25px] flex flex-col gap-2 items-start">
            {blog.categories && blog.categories.length > 0 && (
              <Chip color="success" variant="faded" size="md" className="mt-2">
                {blog.categories[0].title}
              </Chip>
            )}
            <h3 className="text-xl md:text-2xl font-semibold p-0">
              {blog.title.length > 100
                ? blog.title.substr(0, 100) + "..."
                : blog.title}
            </h3>
            <p className="text-md md:text-md">
              {blog.excerpt?.length > 200
                ? blog.excerpt.substr(0, 200) + "..."
                : blog.excerpt}
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </Link>
  );
};

export default Blog;
