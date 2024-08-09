import CategoriesList from "../components/CategoriesList";
import Hero from "../components/Hero";
import LatestEpisodesSection from "../components/LatestEpisodesSection";
import TopProdcast from "../components/TopProdcast";

const HomePage = () => {
    return (
        <div>
            <Hero />
            <CategoriesList />
            <TopProdcast />
            <LatestEpisodesSection />
        </div>
    );
};

export default HomePage;
