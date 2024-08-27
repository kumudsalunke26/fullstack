import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants"; 

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

// export const useGetBlogs = (page = 1) => {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const params = new URLSearchParams();
//     params.set("page", page.toString());

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const res = await axios.get(
//                     `${BASE_URL}/api/blog?${params.toString()}`
//                 );
//                 setBlogs(res.data.data);
//             } catch (err) {
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     return { blogs, loading };
// };

export const useGetBlogs = (page = 1) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${BASE_URL}/api/blog?page=${page}`);
                setBlogs(res.data.data);
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
