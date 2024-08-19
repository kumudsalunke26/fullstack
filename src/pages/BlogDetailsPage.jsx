import { useParams } from "react-router";
import Blog from "../components/BlogCard";
import BlogContent from "../components/BlogContent";
import BlogTitle from "../components/BlogTitle";
import PrimaryButton from "../components/PrimaryButton";
import { useGetBlogById, useGetBlogs } from "../api/BlogApi";

const BlogDetailsPage = () => {
    const blogId = useParams().id;
    const { blog, loading: blogDetailsLoading } = useGetBlogById(blogId);
    const { blogs, loading: SimilerBlogsLoading } = useGetBlogs();

    if (blogDetailsLoading || SimilerBlogsLoading) {
        return (
            <h1 className='mt-10 w-[90%] md:w-[80%] mx-auto text-xl font-semibold'>
                Loading...
            </h1>
        );
    }

    if (!blog) {
        return (
            <h1 className='mt-5 w-[90%] md:w-[80%] mx-auto text-xl font-semibold'>
                Blog not found
            </h1>
        );
    }

    return (
        <div className='mt-10 w-[90%] md:w-[80%] mx-auto'>
            <BlogTitle blog={blog} />
            <BlogContent blog={blog} />
            <div className='flex flex-col gap-10 mt-20 w-full'>
                <div className='flex justify-between items-center w-full'>
                    <h2 className='text-4xl font-extrabold'>
                        Similar Articles
                    </h2>
                    <PrimaryButton toLink='/hosts' text='See All Hosts' />
                </div>
                <div className='grid lg:grid-cols-2 gap-4 w-full'>
                    {blogs.data.slice(0, 2).map((blog, index) => (
                        <Blog blog={blog} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
