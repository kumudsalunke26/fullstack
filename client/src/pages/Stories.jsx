import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import { useAuthStore } from "../store/useAuthStore";

const Stories = () => {
  const navigate = useNavigate();

  const { stories, checkAuth, fetchapprovedStory, authUser } = useAuthStore();

  const viewStory = (story) => {
    console.log("Navigating to story-detail with story:", story);
    navigate("/story-detail", { state: { story } });
  };

  useEffect(() => {
    const funstory = async () => {
      await fetchapprovedStory();
    };
    funstory();
  }, [fetchapprovedStory]);

  const handlePublishClick = () => {
    if (authUser && authUser.role === "user") {
      navigate("/publish");
    }else if(authUser && authUser.role === "admin"){
      navigate("/admin");
    }
    else if(authUser === null){
      navigate("/login");
    }
  };

  return (
    <div className="bg-black min-h-screen p-8">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center text-[3rem]">
        Stories
      </h2>

      {/* Publish Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handlePublishClick}
          className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
        >
          Publish a Story
        </button>
      </div>

      {/* Render Stories or Show Message */}
      {stories && stories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 py-10">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} onView={viewStory} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center text-[1.8rem]">
          No stories published yet.
        </p>
      )}
    </div>
  );
};

export default Stories;
