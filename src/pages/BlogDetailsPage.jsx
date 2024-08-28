import { useParams } from "react-router";
import Blog from "../components/BlogCard";
import BlogContent from "../components/BlogContent";
import BlogTitle from "../components/BlogTitle";
import PrimaryButton from "../components/PrimaryButton";
import { useFetchPosts, useGetBlogById, useGetBlogs } from "../api/BlogApi";
import { AlertTriangle } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

const BlogDetailsPage = () => {
  const blogId = useParams().id;
  const { blog, loading: blogDetailsLoading } = useGetBlogById(blogId);
  const { blogs, loading: SimilerBlogsLoading } = useFetchPosts(1);

  if (blogDetailsLoading || SimilerBlogsLoading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 w-[90%] md:w-[80%] mx-auto text-center">
        <AlertTriangle className="text-red-500 mb-3" size={40} />
        <h1 className="text-xl font-semibold text-gray-500">
          Oops! 404 Error: Blog not found.{" "}
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-10 w-[90%] md:w-[80%] mx-auto">
      <BlogTitle blog={blog} />
      <BlogContent blog={blog} />
      <div className="flex flex-col gap-10 mt-20 w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl font-extrabold">Similar Articles</h2>
          <PrimaryButton toLink="/hosts" text="See All Hosts" />
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {blogs.data.slice(0, 2).map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
ass};

export default BlogDetailsPage;
