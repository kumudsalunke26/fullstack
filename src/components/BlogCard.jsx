import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { User } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    return (
        <Link to={`/blogs/${blog.id}`} className='group'>
            <motion.div
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className='relative cursor-pointer w-full overflow-hidden'
            >
                <Card className='bg-transparent text-text w-full h-full'>
                    <CardHeader className='w-full h-[720px]'>
                        <img
                            src={blog.image}
                            className='object-cover h-full w-full'
                        />
                    </CardHeader>
                    <CardBody className='w-full mt-[-25px] flex flex-col gap-2 items-start'>
                        <div className='flex justify-between w-full'>
                            <div className='text-md'>{blog.category}</div>
                            <div className='text-md'>{blog.date}</div>
                        </div>
                        <h3 className='text-2xl font-bold group-hover:underline'>
                            {blog.title}
                        </h3>
                        <User
                            name='Jane Doe'
                            description='Product Designer'
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                            }}
                        />
                    </CardBody>
                </Card>
            </motion.div>
        </Link>
    );
};

export default Blog;
