import { useGetEpisodes } from "../api/EpisodeApi";
import Episode from "./Episode";
import PrimaryButton from "./PrimaryButton";

const LatestEpisodesSection = () => {
  const { episodes, loading, error } = useGetEpisodes();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        {/* Consider using a spinner or skeleton loader here */}
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <h1 className="flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto text-xl">
        Error loading episodes. Please try again.
      </h1>
    );
  }

  if (!episodes || !episodes.data || episodes.data.length === 0) {
    return (
      <h1 className="flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto text-xl">
        No latest episodes found
      </h1>
    );
  }

  return (
    <section className="mt-24 w-[90%] lg:w-[70%] md:w-[80%] mx-auto">
      <h2 className="text-4xl font-extrabold">Latest Episodes</h2>
      <div
        className="w-full episode-list" 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}>
        {episodes.data.slice(0, 3).map((episode) => (
          <Episode episode={episode} key={episode._id} />
        ))}
      </div>
      <div className="w-full md:w-[40%] flex justify-center">
        <PrimaryButton text="View All episodes" toLink="/episodes" />
      </div>
    </section>
  );
};

const EpisodeWrapper = ({ children }) => <div className=""></div>;

export default LatestEpisodesSection;
