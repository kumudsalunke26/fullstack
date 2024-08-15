import { useGetBlogs } from "../api/BlogApi";
import Blog from "./BlogCard";
import PrimaryButton from "./PrimaryButton";

const LatestBlogs = () => {
    const { blogs, loading } = useGetBlogs();

    if (loading) return <h1 className='text-xl font-semibold'>Loading...</h1>;
    return (
        <div className='flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-4xl font-extrabold'>Latest Articles</h2>
                <PrimaryButton toLink='/hosts' text='See All Hosts' />
            </div>
            <div className='grid lg:grid-cols-2 gap-4 w-full'>
                {blogs.slice(0, 2).map((blog, index) => (
                    <Blog blog={blog} key={index} />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
