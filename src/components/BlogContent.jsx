import { blogContent } from "../utils/blogContent";

const BlogContent = () => {
    return (
        <div className='w-[80%] mx-auto mt-32'>
            {blogContent.map((paragraph, index) => (
                <p
                    key={index}
                    className='mb-5 font-normal text-md tracking-wide'
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default BlogContent;
