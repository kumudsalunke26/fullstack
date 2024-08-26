import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL } from '../constants';

// Hook to get a list of blogs
export const useGetBlogs = (page = 1) => {
    const fetchBlogs = async () => {
        const res = await axios.get(`${BASE_URL}/api/blog?page=${page}`);
        return res.data.data;
    };

    const {
        data: blogs,
        error,
        isLoading,
    } = useQuery(['blogs', page], fetchBlogs);

    if (error) {
        console.error(error);
    }

    return { blogs, loading: isLoading };
};

// Hook to get a blog by ID
export const useGetBlogById = (blogId) => {
    const fetchBlogById = async () => {
        const res = await axios.get(`${BASE_URL}/api/blog/${blogId}`);
        return res.data.data;
    };

    const { data, error, isLoading } = useQuery(
        ['blog', blogId],
        fetchBlogById
    );

    if (error) {
        console.error(error);
    }

    return { blog: data, loading: isLoading };
};
