// import { Navigate, Route, Routes } from 'react-router-dom';
// import BlogDetailsPage from './pages/BlogDetailsPage';
// import BlogsPage from './pages/BlogsPage';
// import ConatctUsPage from './pages/ConatctUsPage';
// import EpisodesPage from './pages/EpisodesPage';
// import HomePage from './pages/HomePage';
// import ReviewsPage from './pages/ReviewsPage';
// import Stories from './pages/Stories';
// import StoryDetail from './pages/StoryDetail';
// import StoryCard from './components/StoryCard';
// // import Admin from './pages/Admin';

// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/episodes" element={<EpisodesPage />} />
//             <Route path="/blogs" element={<BlogsPage />} />
//             <Route path="/reviews" element={<ReviewsPage />} />
//             <Route path="/contact-us" element={<ConatctUsPage />} />
//             <Route path="/blogs/:id" element={<BlogDetailsPage />} />
//             <Route path="/publish" element={authUser && authUser.role == "user" ? <PublishStory /> : <Navigate to="/login" />} />
//             {/* <Route path="/story-detail" element={<StoryDetail/>} /> */}
//             <Route path="/login" element={authUser ? authUser.role == "admin" ? <Navigate to="/admin" /> : <Navigate to="/publish" /> : <Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/stories" element={<Stories />} />






//             <Route
//                 path="/storycards"
//                 element={
//                     <div className="p-4">
//                         {stories.map((story) => (
//                             <StoryCard story={story}/>
//                         ))}
//                     </div>
//                 }
//             />
//             <Route path="/story-detail" element={<StoryDetail />} />

//             {/* <Route path="/admin" element={<Admin />} /> */}
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//     );
// };

// export default AppRoutes;

