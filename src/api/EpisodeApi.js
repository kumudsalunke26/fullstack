import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { client } from '../sanityClient';
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

export const useFetchEpisodes = (page = 1) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageSize = 6;

    const skip = (page - 1) * pageSize;
    const limit = pageSize;

    const query = `*[_type == "episode"]{
  _id,
    
  title,
  categories[]->{
    title
  },
  url,
  duration,
  description,
  thumbnail {
    asset-> {
      _id,
      url
    }
  }
}

`;

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await client.fetch(query);
                setEpisodes(data);
                console.log(data)
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    return { episodes, loading, error };
};
