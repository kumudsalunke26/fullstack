import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";
import LatestBlogs from "../components/LatestBlogs";
import LatestEpisodesSection from "../components/LatestEpisodesSection";
import OurTeamSection from "../components/OurTeamSection";
import PodcastOverview from "../components/PodcastOverview";
import SubsciptionSection from "../components/SubsciptionSection";
import TopPodcast from "../components/TopPodcast";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <CategoriesList />
            <TopPodcast />
            <LatestEpisodesSection />
            <PodcastOverview />
            <OurTeamSection />
            <LatestBlogs />
            <SubsciptionSection />
        </div>
    );
};

export default HomePage;
