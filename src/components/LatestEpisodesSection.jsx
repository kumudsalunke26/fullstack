import Episode from "./Episode";
import PrimaryButton from "./PrimaryButton";

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
        <section className='mt-24 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <h2 className='text-4xl font-extrabold'>Latest Episodes</h2>
            <div className='w-full'>
                {LatestEpisodesData.map((episode) => (
                    <Episode episode={episode} key={episode.id} />
                ))}
            </div>
            <div className='w-full md:w-[40%] flex justify-center'>
                <PrimaryButton text='View All episodes' toLink='/episodes' />
            </div>
        </section>
    );
};

export default LatestEpisodesSection;
