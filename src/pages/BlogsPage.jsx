import { useGetBlogs } from "../api/BlogApi";
import Blog from "../components/BlogCard";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";

const BlogsPage = () => {
    const { blogs, loading } = useGetBlogs();
    console.log(blogs);
    if (loading) {
        return <h1 className='text-xl font-semibold'>Loading...</h1>;
    }
    return (
        <div className='min-h-[100vh] mt-20 mx-auto w-[90%] lg:w-[70%] md:w-[80%]'>
            <div className='flex flex-col md:flex-row w-full md:w-[100%] lg:w-[50%] gap-6'>
                <h1 className='text-white text-4xl font-bold whitespace-nowrap'>
                    All Articles
                </h1>
                <div className='text-md'>
                    <p className='text-white'>
                        We are a collective of passionate dedicated to
                        delivering immersive audio experiences that resonate
                        with your heart & mind.
                    </p>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-8'>
                {blogs.map((blog, index) => (
                    <Blog blog={blog} key={index} />
                ))}
            </div>
            <PaginationSection pages={10} page={3} />
            <SubsciptionSection />
        </div>
    );
};

export default BlogsPage;
