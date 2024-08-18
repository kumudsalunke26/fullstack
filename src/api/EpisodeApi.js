import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useGetEpisodes = (page = 1) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = new URLSearchParams();
    params.set("page", page.toString());

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const res = await axios.get(
                    `${BASE_URL}/api/episode?${params.toString()}`
                );
                setEpisodes(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, []);

    return { episodes, loading };
};
