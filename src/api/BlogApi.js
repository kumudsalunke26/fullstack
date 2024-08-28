import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { client } from './../sanityClient';

export const useFetchPosts = (page = 1) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageSize = 6;

    const skip = (page - 1) * pageSize;
    const limit = pageSize;

    const query = `*[_type == "post" ] | order(_createdAt desc) [${skip}...${skip + limit - 1}]{
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset-> {
      _id,
      url
    }
  },
  categories[]->{
    title
  }
}
`;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await client.fetch(query);
                setPosts(data); 
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { blogs: posts, loading, error };
};


export const useGetBlogById = (blogId) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/blog/${blogId}`);
                setBlog(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    return { blog, loading };
};

export const useGetBlogs = (page = 1) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${BASE_URL}/api/blog?page=${page}`);
                setBlogs(res?.data?.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [page]);

    return { blogs, loading };
};
