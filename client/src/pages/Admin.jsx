
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

function Admin() {
  const Token = useAuthStore((state) => state.token);
  const isInitialized = Token !== null; // Check token existence
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();
  const { logout, setUser, setToken, token, fetchPendingStories, approveStory } = useAuthStore();



  console.log('stories', stories);

  // Approve a story


  // Handle logout
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const response = await logout();
      if (response.success) {
        setUser(null)
        setToken(null)
        console.log("message:", response.message);
        navigate("/login");
      } else {
        console.log("message:", response.message);
        alert(response.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const approvedStory = async (storyId) => {
    const response = await approveStory(storyId)
    if (response.success) {
      setStories((prevStories) =>
        prevStories.map((story) =>
          story.id === storyId ? { ...story, status: 'approved' } : story
        )
      );
      console.log(response.message)
      console.log('Story approved:');
    }
  }



  useEffect(() => {
    if (isInitialized) {
      const func = async () => {
        const response = await fetchPendingStories()
        setStories(response)
      }
      func()
    }
  }, [fetchPendingStories,isInitialized]);




  if (!isInitialized) {
    return <div>Loading...</div>; // Render a loading indicator
  }


  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Admin - Pending Stories</h1>

      {stories && stories.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No pending stories to approve.</p>
      ) : (
        <ul className="space-y-4">
          {stories && stories.map((story) => (
            <li
              key={story.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
            >
              <h2 className="text-2xl font-semibold text-gray-700">{story.title}</h2>
              <p className="text-lg text-gray-600">{story.content}</p>
              <p className="mt-2 text-sm text-gray-500">Status: {story.status}</p>

              {story.status === 'pending' && (
                <button
                  onClick={() => approvedStory(story.id)}
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Approve
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-44 mt-6"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Admin;
