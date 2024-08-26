import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL } from '../constants';

const fetchEpisodes = async (page) => {
    const { data } = await axios.get(`${BASE_URL}/api/episode`, {
        params: { page },
    });
    return data.data;
};

export const useGetEpisodes = (page = 1) => {
    const { data, isLoading, error } = useQuery(['episodes', page], () =>
        fetchEpisodes(page)
    );

    if (error) {
        console.error(error);
    }

    return {
        episodes: data || [],
        loading: isLoading,
        error,
    };
};
