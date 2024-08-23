import { User } from "@nextui-org/react";

const BlogTitle = ({ blog }) => {
    return (
      <div className="flex flex-col gap-4 text-md w-full">
        <div className="w-full">
          <img
            src={blog.blogImageUrl}
            alt="blog"
            loading="lazy"
            className="object-cover min-w-[100%] h-fit lg:w-[800px] mx-auto"
          />
        </div>
        <div className="flex flex-col gap-8 w-full items-start">
          <div className="flex justify-between gap-10 w-full">
            <span className="text-primary">{blog.category}</span>
            <span className="text-mainText">{blog.date}</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {blog.title}
          </h1>
          <User
            name={blog.author}
            description={blog.authorProffesion}
            avatarProps={{
              src: blog.authorImageUrl,
            }}
          />
          <div>
            <p className="text-mainText">{blog.description}</p>
          </div>
        </div>
      </div>
    );
};

export default BlogTitle;
