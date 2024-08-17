import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const useGetBlogById = (blogId) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/blog/${blogId}`);
                setBlog(res.data);
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
    const params = new URLSearchParams();
    params.set("page", page.toString());

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/api/blog?${params.toString()}`
                );
                setBlogs(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, loading };
};

export const usePostBlog = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const postBlog = async (blogData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await axios.post(`${BASE_URL}/api/blog`, blogData);
            if (res.status === 201) {
                setSuccess(true);
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { postBlog, loading, error, success };
};
