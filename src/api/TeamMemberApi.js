import { useQuery } from 'react-query';
import axios from 'axios';
import { BASE_URL } from '../constants';

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
