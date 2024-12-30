import React from "react";
import { useLocation } from "react-router-dom";

const StoryDetail = () => {
  const location = useLocation();
  const {story} = location.state ||{};

  if (!story) {
    return <div className="text-white text-center">Story not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="bg-white max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-black">{story.title}</h1>
        <img
          src={story.imageUrl}
          alt="Story"
          className="w-[40rem] h-[23rem] object-cover mb-6"
          
        />
        {/* <div className="w-[7rem] absolute top-[36rem] left-[29rem] bg-black py-1 px-3 rounded-full shadow-lg">
        <span className="text-white font-semibold text-sm">JourneyStory</span>
      </div> */}
        <p className="text-lg text-black">{story.content}</p>
      </div>
    </div>
  );
};

export default StoryDetail;


