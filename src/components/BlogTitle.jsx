import { User } from "@nextui-org/react";

const BlogTitle = ({ blog }) => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-4 text-md'>
            <div className='flex flex-col gap-8 w-full md:w-[48%] items-start flex-shrink'>
                <div>
                    <span className='text-primary'>{blog.category}</span>
                    <span className='ml-6 text-mainText'>{blog.date}</span>
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>
                    {blog.title}
                </h1>
                <User
                    name={blog.author}
                    description={blog.authorProffesion}
                    avatarProps={{
                        src: blog.authorImageUrl,
                    }}
                />
                <div>
                    <p className='text-mainText'>{blog.description}</p>
                </div>
            </div>
            <div className='w-full md:w-[48%]'>
                <img
                    src={blog.blogImageUrl}
                    alt='blog'
                    className='object-cover w-full max-h-[600px] md:w-[300px] md:min-h-[600px] lg:min-h-full lg:w-[800px]'
                />
            </div>
        </div>
    );
};

export default BlogTitle;
