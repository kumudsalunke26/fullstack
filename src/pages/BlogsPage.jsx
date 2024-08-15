import { Skeleton } from "@nextui-org/skeleton";
import { useGetBlogs } from "../api/BlogApi";
import Blog from "../components/BlogCard";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";
import LoadingSkeleton from "../components/LoadingSkeleton";

const BlogsPage = () => {
    const { blogs, loading } = useGetBlogs();

    return (
        <div className='min-h-[100vh] mt-20 mx-auto w-[90%] lg:w-[70%] md:w-[80%]'>
            <div className='flex flex-col md:flex-row w-full md:w-[100%] gap-6'>
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

            <div className='grid lg:grid-cols-2 gap-8 mt-4'>
                {loading
                    ? Array(6)
                          .fill()
                          .map((_, index) => {
                              return <LoadingSkeleton key={index} />;
                          })
                    : blogs
                          .slice(0, 2)
                          .map((blog, index) => (
                              <Blog blog={blog} key={index} />
                          ))}
            </div>
            <PaginationSection pages={10} page={3} />
            <SubsciptionSection />
        </div>
    );
};

export default BlogsPage;
