import { useState } from "react";
import { useFetchEpisodes, useGetEpisodes } from "../api/EpisodeApi";
import Episode from "../components/Episode";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";
import LoadingSpinner from "../components/LoadingSpinner";
import { Suspense } from "react";
import ErrorAlert from "../components/ErrorAlert";
import { Pagination } from "@nextui-org/react";

const EpisodesPage = () => {
  const [page, setPage] = useState(1);
  const { episodes, loading } = useFetchEpisodes(page);
  console.log(episodes);
  // if (!episodes || !episodes.data || episodes.data.length === 0) {
  //   return <ErrorAlert name={"episodes"} />;
  // }
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
          {episodes.map((episode) => (
            <Episode episode={episode} key={episode._id} />
          ))}
        </div>
      </Suspense>

      {/* <PaginationSection pages={episodes} page={episodes} setPage={setPage} /> */}
      {/* <Pagination total={10} initialPage={1} /> */}

      <SubsciptionSection />
    </div>
  );
};

export default EpisodesPage;
