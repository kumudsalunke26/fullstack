import React from "react";
import DOMPurify from "dompurify";

const BlogContent = ({ blog }) => {
    const sanitizedContent = DOMPurify.sanitize(blog.content);

    return (
        <div className='w-[80%] mx-auto mt-24' dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
    );
};

export default BlogContent;