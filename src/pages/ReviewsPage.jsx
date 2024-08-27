import Footer from '../components/Footer';
import Header from '../components/Header';
import ReviewSection from '../components/ReviewSection';
import SubscriptionSection from '../components/SubsciptionSection';

const ReviewsPage = () => {
    return (
        <div className="bg-background text-white overflow-hidden">
    
            <div className="min-h-[100vh] mt-5 w-full">
                <ReviewSection />
                <SubscriptionSection />
            </div>
            
        </div>
    );
};

export default ReviewsPage;
