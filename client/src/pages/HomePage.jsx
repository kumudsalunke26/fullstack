import { useFetchPosts, useGetBlogs } from "../api/BlogApi";
import { useGetTeamMembers, useTeamMembers } from "../api/TeamMemberApi";
import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";
import LatestBlogs from "../components/LatestBlogs";
import LatestEpisodesSection from "../components/LatestEpisodesSection";
import OurTeamSection from "../components/OurTeamSection";
import PodcastOverview from "../components/PodcastOverview";
import SubsciptionSection from "../components/SubsciptionSection";
import TopPodcast from "../components/TopPodcast";

const HomePage = () => {
  const { blogs, loading: blogsLoading } = useFetchPosts();
  const { blogs2, loading2 } = useGetBlogs();

  const { team, loading: teamLoading, error: teamError } = useTeamMembers();
  // const { teamMembers, loading: teamLoading } = useGetTeamMembers();
  return (
    <div className="bg-background text-white overflow-hidden">
      <div className="mt-5">
        <Hero />
        <CategoriesList />
        <TopPodcast />
        <LatestBlogs blogs={blogs} loading={blogsLoading} />
        <PodcastOverview />
        <OurTeamSection teamMembers={team} loading={teamLoading} />
        <LatestEpisodesSection />
        <SubsciptionSection />
      </div>
    </div>
  );
};

export default HomePage;
