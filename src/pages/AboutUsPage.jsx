import CompanyInfo from "../components/CompanyInfo";
import FAQSection from "../components/FAQSection";
import MissionAndVisionSection from "../components/MissionAndVisionSection";
import OurTeamSection from "../components/OurTeamSection";
import ReviewSection from "../components/ReviewSection";
import SubsciptionSection from "../components/SubsciptionSection";
import VideoSection from "../components/VideoSection";

const AboutUsPage = () => {
    return (
        <div className='min-h-[100vh] w-full mt-20'>
            <CompanyInfo />
            <MissionAndVisionSection />
            <VideoSection />
            <ReviewSection />
            <OurTeamSection />
            <FAQSection />
            <SubsciptionSection />
        </div>
    );
};

export default AboutUsPage;
