import React from "react";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ content }) => {
  return (
    <div className="w-[80%] mx-auto mt-32">
      <ReactMarkdown className="rich-text">
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogContent;
