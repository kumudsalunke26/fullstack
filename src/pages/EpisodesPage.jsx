import { useState } from "react";
import { useGetEpisodes } from "../api/EpisodeApi";
import Episode from "../components/Episode";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";
import LoadingSpinner from "../components/LoadingSpinner";
import { Suspense } from "react";

const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { episodes, loading } = useGetEpisodes(page);

  if (!episodes || !episodes.data || episodes.data.length === 0) {
    return (
      <h1 className="flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto text-xl">
        No latest episodes found
      </h1>
    );
  }
  return (
    <div className="min-h-[100vh] mt-5 w-[90%] lg:w-[70%] md:w-[80%] mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <h1 className="text-white text-4xl font-semibold whitespace-nowrap">
          All Episodes
        </h1>
        <div className="text-md">
          <p className="text-white">
            We are a collective of passionate dedicated to delivering immersive
            audio experiences that resonate with your heart & mind.
          </p>
        </div>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="w-full">
          {episodes.data.map((episode) => (
            <Episode episode={episode} key={episode.id} />
          ))}
        </div>
      </Suspense>

      <PaginationSection
        pages={episodes.pagination.pages}
        page={episodes.pagination.page}
        setPage={setPage}
      />
      <SubsciptionSection />
    </div>
  );
};

export default EpisodesPage;
