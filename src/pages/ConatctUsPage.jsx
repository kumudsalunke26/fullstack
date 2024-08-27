import ContactUsSection from '../components/ContactUsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SubsciptionSection from '../components/SubsciptionSection';

const ConatctUsPage = () => {
    return (
        <div className="bg-background text-white overflow-hidden">
            <Header />
            <div className="min-h-[100vh] mt-5 w-full">
                <ContactUsSection />
                <SubsciptionSection />
            </div>
            <Footer />
        </div>
    );
};

export default ConatctUsPage;
