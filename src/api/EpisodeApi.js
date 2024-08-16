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
                setEpisodes(res.data);
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

export const usePostEpisode = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const postEpisode = async (formData) => {
        setLoading(true);
        try {
            const episode = await axios.post(
                `${BASE_URL}/api/episode`,
                formData
            );
            setSuccess(true);
            return episode;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { postEpisode, loading, error, success };
};
