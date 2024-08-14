import Episode from "../components/Episode";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";

const LatestEpisodesData = [
    {
        id: 1,
        title: "Episode 1: Introduction to the podcast",
        host: "John Doe",
        date: "2021-09-01",
        genre: "Technology",
        duration: "30",
        thumbnail:
            "https://framerusercontent.com/images/NeyrABTuK1VDCirywGk9mqJbQ1g.png",
        vol: 1,
    },
    {
        id: 2,
        title: "Episode 2: The future of AI",
        host: "Jane Doe",
        date: "2021-09-08",
        genre: "Technology",
        duration: "45",
        thumbnail:
            "https://framerusercontent.com/images/WZiBqRCRuKwYbOtZXZyIuhbVjNg.png",
        vol: 1,
    },
    {
        id: 3,
        title: "Episode 3: The future of robotics",
        host: "John Doe",
        date: "2021-09-15",
        genre: "Technology",
        duration: "45",
        thumbnail:
            "https://framerusercontent.com/images/CzQNl9xaVBJQALAk17pzAdDhw.png",
        vol: 1,
    },
    {
        id: 4,
        title: "Episode 4: Exploring JavaScript frameworks",
        host: "Jane Doe",
        date: "2021-09-22",
        genre: "Technology",
        duration: "60",
        thumbnail:
            "https://framerusercontent.com/images/NeyrABTuK1VDCirywGk9mqJbQ1g.png",
        vol: 1,
    },
    {
        id: 5,
        title: "Episode 5: The power of React",
        host: "John Doe",
        date: "2021-09-29",
        genre: "Technology",
        duration: "45",
        thumbnail:
            "https://framerusercontent.com/images/WZiBqRCRuKwYbOtZXZyIuhbVjNg.png",
        vol: 1,
    },
    {
        id: 6,
        title: "Episode 6: Mastering CSS",
        host: "Jane Doe",
        date: "2021-10-06",
        genre: "Technology",
        duration: "30",
        thumbnail:
            "https://framerusercontent.com/images/CzQNl9xaVBJQALAk17pzAdDhw.png",
        vol: 1,
    },
    {
        id: 7,
        title: "Episode 7: The art of debugging",
        host: "John Doe",
        date: "2021-10-13",
        genre: "Technology",
        duration: "45",
        thumbnail:
            "https://framerusercontent.com/images/NeyrABTuK1VDCirywGk9mqJbQ1g.png",
        vol: 1,
    },
    {
        id: 8,
        title: "Episode 8: Building scalable web applications",
        host: "Jane Doe",
        date: "2021-10-20",
        genre: "Technology",
        duration: "60",
        thumbnail:
            "https://framerusercontent.com/images/WZiBqRCRuKwYbOtZXZyIuhbVjNg.png",
        vol: 1,
    },
    {
        id: 9,
        title: "Episode 9: Exploring backend technologies",
        host: "John Doe",
        date: "2021-10-27",
        genre: "Technology",
        duration: "45",
        thumbnail:
            "https://framerusercontent.com/images/CzQNl9xaVBJQALAk17pzAdDhw.png",
        vol: 1,
    },
    {
        id: 10,
        title: "Episode 10: The future of web development",
        host: "Jane Doe",
        date: "2021-11-03",
        genre: "Technology",
        duration: "60",
        thumbnail:
            "https://framerusercontent.com/images/NeyrABTuK1VDCirywGk9mqJbQ1g.png",
        vol: 1,
    },
];
const EpisodesPage = () => {
    return (
        <div className='min-h-[100vh] mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <div className='flex flex-col md:flex-row gap-6'>
                <h1 className='text-white text-4xl font-bold whitespace-nowrap'>
                    All Episodes
                </h1>
                <div className='text-md'>
                    <p className='text-white'>
                        We are a collective of passionate dedicated to
                        delivering immersive audio experiences that resonate
                        with your heart & mind.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                {LatestEpisodesData.map((episode) => (
                    <Episode episode={episode} key={episode.id} />
                ))}
            </div>
            <PaginationSection pages={7} page={3} />
            <SubsciptionSection />
        </div>
    );
};

export default EpisodesPage;
