import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants"; 

export const useGetTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/api/team-members`);
                setTeamMembers(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    return { teamMembers, loading };
};
