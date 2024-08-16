import { useState } from "react";
import { usePostBlog } from "../api/BlogApi";

const BlogPostForm = () => {
  const { postBlog, loading, error, success } = usePostBlog();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "",
    authorProffesion: "",
    authorImageUrl: "",
    blogImageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog(formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="3"
            required></textarea>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="6"
            required></textarea>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Author Profession
          </label>
          <input
            type="text"
            name="authorProffesion"
            value={formData.authorProffesion}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Author Image URL
          </label>
          <input
            type="url"
            name="authorImageUrl"
            value={formData.authorImageUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">
            Blog Image URL
          </label>
          <input
            type="url"
            name="blogImageUrl"
            value={formData.blogImageUrl}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          disabled={loading}>
          {loading ? "Posting..." : "Post Blog"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && (
        <p className="mt-4 text-green-500">Blog posted successfully!</p>
      )}
    </div>
  );
};

export default BlogPostForm;
