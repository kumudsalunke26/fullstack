import { Suspense } from "react";
import { useFetchEpisodes, useGetEpisodes } from "../api/EpisodeApi";
import Episode from "./Episode";
import PrimaryButton from "./PrimaryButton";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";

const LatestEpisodesSection = () => {
  const { episodes, error } = useFetchEpisodes();

  // if (!episodes || !episodes.data || episodes.length === 0) {
  //   return <ErrorAlert customMsg={error} />;
  // }

  return (
    <section className="mt-24 w-[90%] lg:w-[70%] md:w-[80%] mx-auto">
      <h2 className="text-4xl font-extrabold">Latest Episodes</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <div
          className="w-full episode-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}>
          {episodes.slice(0, 3).map((episode) => (
            <Episode episode={episode} key={episode._id} />
          ))}
        </div>
      </Suspense>

      <div className="w-full md:w-[40%] flex justify-center">
        <PrimaryButton text="View All episodes" toLink="/episodes" />
      </div>
    </section>
  );
};

const EpisodeWrapper = ({ children }) => <div className=""></div>;

export default LatestEpisodesSection;
