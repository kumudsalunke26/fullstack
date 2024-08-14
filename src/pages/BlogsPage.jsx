import Blog from "../components/BlogCard";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";

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
    {
        id: 4,
        title: "Blog Title Four",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 5,
        title: "Blog Title Five",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 6,
        title: "Blog Title Six",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 7,
        title: "Blog Title Seven",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 8,
        title: "Blog Title Eight",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 9,
        title: "Blog Title Nine",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 10,
        title: "Blog Title Ten",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 11,
        title: "Blog Title Ten",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
    {
        id: 12,
        title: "Blog Title Ten",
        image: "https://placehold.co/400x500",
        date: "01-01-2021",
        category: "Technology",
        userName: "John Doe",
        userStatus: "Author",
    },
];
const BlogsPage = () => {
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

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {BlogsData.map((blog, index) => (
                    <Blog blog={blog} key={index} />
                ))}
            </div>
            <PaginationSection pages={10} page={3} />
            <SubsciptionSection />
        </div>
    );
};

export default BlogsPage;
