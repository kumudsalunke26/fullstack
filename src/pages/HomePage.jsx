import { useGetBlogs } from "../api/BlogApi";
import { useGetTeamMembers } from "../api/TeamMemberApi";
import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";
import LatestBlogs from "../components/LatestBlogs";
import LatestEpisodesSection from "../components/LatestEpisodesSection";
import OurTeamSection from "../components/OurTeamSection";
import PodcastOverview from "../components/PodcastOverview";
import SubsciptionSection from "../components/SubsciptionSection";
import TopPodcast from "../components/TopPodcast";

const HomePage = () => {
  const { blogs, loading: blogsLoading } = useGetBlogs();
  const { teamMembers, loading: teamLoading } = useGetTeamMembers();
  return (
    <div className="mt-5">
      <Hero />
      <CategoriesList />
      <TopPodcast />  
      <LatestEpisodesSection />
      <PodcastOverview />
      <OurTeamSection teamMembers={teamMembers} loading={teamLoading} />
      <LatestBlogs blogs={blogs} loading={blogsLoading} />
      <SubsciptionSection />
    </div>
  );
};

export default HomePage;
