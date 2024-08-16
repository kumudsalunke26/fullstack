import Blog from "./BlogCard";
import PrimaryButton from "./PrimaryButton";
import LoadingSkeleton from "./LoadingSkeleton";

const LatestBlogs = ({ blogs, loading }) => {
    if (!blogs || !blogs.data) {
        return (
            <h1 className='mt-10 w-[90%] md:w-[80%] mx-auto text-xl font-semibold'>
                No Blogs Found
            </h1>
        );
    }
    return (
        <div className='flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-4xl font-extrabold'>Latest Articles</h2>
                <PrimaryButton toLink='/hosts' text='See All Hosts' />
            </div>
            <div className='grid lg:grid-cols-2 gap-4 w-full'>
                {loading
                    ? Array(2)
                          .fill()
                          .map((_, index) => {
                              return <LoadingSkeleton key={index} />;
                          })
                    : blogs?.data
                          .slice(0, 2)
                          .map((blog, index) => (
                              <Blog blog={blog} key={index} />
                          ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
