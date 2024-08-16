import React from "react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ blog }) => {
    return (
        <div className='w-[80%] mx-auto mt-24'>
            <ReactMarkdown className='rich-text'>{blog.content}</ReactMarkdown>
        </div>
    );
};

export default BlogContent;
