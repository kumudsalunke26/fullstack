import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useState, useEffect } from 'react';

const fetchTeamMembers = async () => {
    const { data } = await axios.get(`${BASE_URL}/api/team-members`);
    return data.data;
};

export const useGetTeamMembers = () => {
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['teamMembers'],
        queryFn: fetchTeamMembers,
        retry: 1,  // Number of retry attempts on failure
        staleTime: 60000,  // Data considered fresh for 1 minute
    });

    return {
        teamMembers: data || [],
        loading: isLoading,
        error: isError ? error.message : null,
    };
};

export const useTeamMembers = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Query to fetch team members ordered by `index` ascending
    const query = `*[_type == "team"] | order(index asc) {
    _id,
    index,
    name,
    slug,
    designation,
    email,
    linkedin,
    instagram,
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

    useEffect(() => {
        const fetchTeam = async () => {
            setLoading(true);
            try {
                const data = await client.fetch(query); // Use the defined query
                setTeam(data);
                console.log("teams", data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []); // Empty dependency array to run once on mount

    return { team, loading, error };
};

