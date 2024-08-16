import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { User } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    return (
        <Link to={`/blogs/${blog._id}`} className='group'>
            <motion.div
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className='relative cursor-pointer w-full overflow-hidden'
            >
                <Card className='bg-transparent text-text w-full h-fit'>
                    <CardHeader className='w-full h-full'>
                        <img
                            src={blog.blogImageUrl}
                            className='object-cover h-full w-full'
                        />
                    </CardHeader>
                    <CardBody className='w-full mt-[-25px] flex flex-col gap-2 items-start'>
                        <div className='flex justify-between w-full'>
                            <div className='text-md'>{blog.category}</div>
                        </div>
                        <h3 className='text-xl md:text-2xl font-bold group-hover:underline'>
                            {blog.title}
                        </h3>
                        <User
                            name={blog.author}
                            description={blog.authorProfession}
                            avatarProps={{
                                src: blog.authorImageUrl,
                            }}
                        />
                    </CardBody>
                </Card>
            </motion.div>
        </Link>
    );
};

export default Blog;
