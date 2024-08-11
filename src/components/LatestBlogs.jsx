import Blog from "./BlogCard";
import PrimaryButton from "./PrimaryButton";

const BlogsData = [
    {
        id: 1,
        title: "Blog Title One",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Prsident of USA",
    },
    {
        id: 2,
        title: "Blog Title Two",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",

        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 3,
        title: "Blog Title Three",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
];
const LatestBlogs = () => {
    return (
        <div className='flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-4xl font-extrabold'>Latest Articles</h2>
                <PrimaryButton toLink='/hosts' text='See All Hosts' />
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-normal gap-8 px-10'>
                {BlogsData.map((blog, index) => (
                    <Blog blog={blog} key={index} />
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
