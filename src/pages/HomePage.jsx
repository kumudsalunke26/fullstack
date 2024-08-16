import { useGetBlogs } from "../api/BlogApi";
import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";
import LatestBlogs from "../components/LatestBlogs";
import LatestEpisodesSection from "../components/LatestEpisodesSection";
import OurTeamSection from "../components/OurTeamSection";
import PodcastOverview from "../components/PodcastOverview";
import SubsciptionSection from "../components/SubsciptionSection";
import TopPodcast from "../components/TopPodcast";

const HomePage = () => {
    const { blogs, loading } = useGetBlogs();
    return (
        <div>
            <Hero />
            <CategoriesList />
            <TopPodcast />
            <LatestEpisodesSection />
            <PodcastOverview />
            <OurTeamSection />
            <LatestBlogs blogs={blogs} loading={loading} />
            <SubsciptionSection />
        </div>
    );
};

export default HomePage;
