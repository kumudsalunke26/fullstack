import { Link } from "react-router-dom";
import Episode from "./Episode";

const LatestEpisodesData = [
    {
        id: 1,
        title: "Episode 1: Introduction to the podcast",
        host: "John Doe",
        date: "2021-09-01",
        genre: "Technology",
        duration: "30",
        thumbnail: "https://placehold.co/1600x600",
        vol: 1,
    },
    {
        id: 2,
        title: "Episode 2: The future of AI",
        host: "Jane Doe",
        date: "2021-09-08",
        genre: "Technology",
        duration: "45",
        thumbnail: "https://placehold.co/1600x600",
        vol: 1,
    },
    {
        id: 3,
        title: "Episode 3: The future of robotics",
        host: "John Doe",
        date: "2021-09-15",
        genre: "Technology",
        duration: "45",
        thumbnail: "https://placehold.co/1600x600",
        vol: 1,
    },
];
const LatestEpisodesSection = () => {
    return (
        <section className='w-[80%] mx-auto'>
            <h2 className='text-2xl font-bold'>Latest Episodes</h2>
            <div className='w-full'>
                {LatestEpisodesData.map((episode) => (
                    <Episode episode={episode} key={episode.id} />
                ))}
            </div>
            <div className='w-full md:w-[40%] flex justify-center'>
                <button className='mt-4 border-2 border-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                    <Link to='/episodes'>View All Episodes</Link>
                </button>
            </div>
        </section>
    );
};

export default LatestEpisodesSection;
