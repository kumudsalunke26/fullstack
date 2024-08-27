import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants';
const fetchEpisodes = async (page) => {
    const { data } = await axios.get(`${BASE_URL}/api/episode`, {
        params: { page }
    });
    return data.data;
};

export const useGetEpisodes = (page = 1) => {
    const { data, isLoading, error } = useQuery(
        ['episodes', page],
        () => fetchEpisodes(page),
        {
            keepPreviousData: true, // Optional: keeps old data while new data is fetched
        }
    );

    return {
        episodes: data || [],
        loading: isLoading,
        error
    };
};
