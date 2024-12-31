import Blog from "./BlogCard";
import PrimaryButton from "./PrimaryButton";
import LoadingSkeleton from "./LoadingSkeleton";
import LoadingSpinner from "./LoadingSpinner";
import { Suspense } from "react";
import { AlertTriangle } from "lucide-react";
import ErrorAlert from "./ErrorAlert";

const LatestBlogs = ({ blogs, loading }) => {
  // if (!blogs || !blogs.data) {
  //   return <ErrorAlert name={"blogs"} />;
  // }
  return (
    <div className="flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-4xl font-extrabold">Latest Articles</h2>
        <PrimaryButton
          toLink="https://blogs.journeystory.in/"
          text="See All Blogs"
        />
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {blogs?.slice(0, 2).map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default LatestBlogs;
