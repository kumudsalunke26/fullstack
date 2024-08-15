import { useParams } from "react-router";
import Blog from "../components/BlogCard";
import BlogContent from "../components/BlogContent";
import BlogTitle from "../components/BlogTitle";
import PrimaryButton from "../components/PrimaryButton";

const BlogsData = [
    {
        id: 1,
        title: "Blog Title One",
        image: "https://framerusercontent.com/images/9anqlPzKmBC4zMgvvHBsbhn6M.png?scale-down-to=512",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Prsident of USA",
    },
    {
        id: 2,
        title: "Blog Title Two",
        image: "https://framerusercontent.com/images/M2QhmZ49orRBBQ2MUojCmUS0I.png?scale-down-to=512",
        date: "01-01-2021",
        category: "Technology",

        userName: "John Doe",
        userStatus: "Author",
    },
];
const BlogDetailsPage = () => {
    const blogId = useParams().id;
    console.log(blogId);
    return (
        <div className='mt-10 w-[90%] md:w-[80%] mx-auto'>
            <BlogTitle />
            <BlogContent />
            <div className='flex flex-col gap-10 mt-20 w-full'>
                <div className='flex justify-between items-center w-full'>
                    <h2 className='text-4xl font-extrabold'>
                        Similar Articles
                    </h2>
                    <PrimaryButton toLink='/hosts' text='See All Hosts' />
                </div>
                <div className='grid lg:grid-cols-2 gap-4 w-full'>
                    {BlogsData.map((blog, index) => (
                        <Blog blog={blog} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
