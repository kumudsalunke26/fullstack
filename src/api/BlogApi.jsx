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

export const useGetBlogs = (
    searchState = { page: 1, sortOption: "lastUpdated" }
) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = new URLSearchParams();
    params.set("page", searchState.page.toString());
    params.set("sortOption", searchState.sortOption);

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
    }, [searchState]);

    return { blogs, loading };
};
