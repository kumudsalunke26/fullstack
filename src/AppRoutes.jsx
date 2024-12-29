import { Navigate, Route, Routes } from 'react-router-dom';
import BlogDetailsPage from './pages/BlogDetailsPage';
import BlogsPage from './pages/BlogsPage';
import ConatctUsPage from './pages/ConatctUsPage';
import EpisodesPage from './pages/EpisodesPage';
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import Stories from './pages/Stories';
import Admin from './pages/Admin';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact-us" element={<ConatctUsPage />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
            <Route path="/stories" element={<Stories/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
