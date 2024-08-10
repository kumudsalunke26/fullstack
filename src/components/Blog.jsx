import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { DateRangePicker, Image, User } from "@nextui-org/react";
import { motion } from "framer-motion";

const Blog = ({ blog }) => {
    return (
        <motion.div
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className='relative cursor-pointer w-[280px] lg:w-[300px]'
        >
            <Card className='bg-transparent text-white'>
                <CardHeader>
                    <Image
                        src={blog.image}
                        width={320}
                        height={400}
                        className='object-cover hover:scale-95'
                    />
                </CardHeader>
                <CardBody className='w-full mt-[-25px] flex flex-col gap-2 items-start'>
                    <div className='flex justify-between w-full'>
                        <div className='text-md'>{blog.category}</div>
                        <div className='text-md'>{blog.date}</div>
                    </div>
                    <h3 className='text-2xl font-bold'>{blog.title}</h3>
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
    );
};

export default Blog;
