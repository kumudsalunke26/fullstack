
// import React, { useState, useEffect } from 'react';

// function Admin() {
//   const [stories, setStories] = useState([]);

//   useEffect(() => {
//     const fetchPendingStories = async () => {
//       try {
//         const response = await fetch('http://localhost:8401/api/stories/pending');
//         const data = await response.json();
//         console.log('Fetched stories:', data);
//         setStories(data.pendingStories);  
//       } catch (error) {
//         console.error('Error fetching pending stories:', error);
//       }
//     };
//     fetchPendingStories();
//   },);

//   console.log("stories",stories);

//   const approveStory = async (storyId) => {
//     try {
//       // Updated URL for approving a story
//       const response = await fetch(`http://localhost:8401/api/stories/approve/${storyId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStories((prevStories) =>
//           prevStories.map((story) =>
//             story._id === storyId ? { ...story, status: 'approved' } : story
//           )
//         );
//         console.log('Story approved:', data.story);
//       } else {
//         console.error('Error approving story:', data.error);
//       }
//     } catch (error) {
//       console.error('Error sending approval request:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Admin - Pending Stories</h1>
      
//       {stories && stories.length === 0 ? (
//         <p className="text-center text-lg text-gray-600">No pending stories to approve.</p>
//       ) : (
//         <ul className="space-y-4">
//           {stories.map((story) => (
//             <li
//               key={story._id}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
//             >
//               <h2 className="text-2xl font-semibold text-gray-700">{story.title}</h2>
//               <p className="text-lg text-gray-600">{story.content}</p>
//               <p className="mt-2 text-sm text-gray-500">Status: {story.status}</p>
              
//               {story.status === 'pending' && (
//                 <button
//                   onClick={() => approveStory(story._id)}
//                   className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   Approve
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Admin;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '../store/useAuthStore';

// function Admin() {
//   const [stories, setStories] = useState([]);
//   const navigate = useNavigate();
//   const { logout } = useAuthStore();

//   // Fetch pending stories
//   useEffect(() => {
//     const fetchPendingStories = async () => {
//       try {
//         const response = await fetch('http://localhost:8401/api/stories/pending', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include', // For session-based auth
//         });
//         const data = await response.json();
//         console.log('Fetched stories:', data);
//         setStories(data.pendingStories);
//       } catch (error) {
//         console.error('Error fetching pending stories:', error);
//       }
//     };
//     fetchPendingStories();
//   }, []); // Empty dependency array to run only on mount

//   console.log('stories', stories);

//   // Approve a story
//   const approveStory = async (storyId) => {
//     const storyID = { storyId };
//     try {
//       const response = await fetch(`http://localhost:8401/api/stories/approve/${storyId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(storyID),
//         credentials: 'include', // For session-based auth
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStories((prevStories) =>
//           prevStories.map((story) =>
//             story._id === storyId ? { ...story, status: 'approved' } : story
//           )
//         );
//         console.log('Story approved:', data.story);
//       } else {
//         console.error('Error approving story:', data.error);
//       }
//     } catch (error) {
//       console.error('Error sending approval request:', error);
//     }
//   };

//   // Handle logout
//   const handleLogout = async (e) => {
//     e.preventDefault();
//     const response = await logout();
//     if (response.success) {
//       console.log('Logout message:', response.message);
//       navigate('/login'); // Redirect to login page after logout
//     } else {
//       console.log('Logout error:', response.message);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Admin - Pending Stories</h1>

//       {stories && stories.length === 0 ? (
//         <p className="text-center text-lg text-gray-600">No pending stories to approve.</p>
//       ) : (
//         <ul className="space-y-4">
//           {stories.map((story) => (
//             <li
//               key={story._id}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
//             >
//               <h2 className="text-2xl font-semibold text-gray-700">{story.title}</h2>
//               <p className="text-lg text-gray-600">{story.content}</p>
//               <p className="mt-2 text-sm text-gray-500">Status: {story.status}</p>

//               {story.status === 'pending' && (
//                 <button
//                   onClick={() => approveStory(story._id)}
//                   className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   Approve
//                 </button>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-44 mt-6"
//         onClick={handleLogout}
//       >
//         LOGOUT
//       </button>
//     </div>
//   );
// }

// export default Admin;
