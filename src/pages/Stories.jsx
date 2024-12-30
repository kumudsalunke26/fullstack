
// import React from "react";
// import StoryCard from "../components/StoryCard";

// const Stories = () => {
//   // Sample story data
//   const storiesData = [
//     {
//       imageUrl: "https://via.placeholder.com/200x200",
//       headline: "India's GDP growth could near 8% in FY24: RBI Governor Das",
//       content:
//         "RBI Governor Shaktikanta Das said the country's GDP growth in the current financial year could exceed the government's estimate of 7.6%.",
//     },
//     {
//       imageUrl: "https://via.placeholder.com/200x200",
//       headline: "Global Tech Industry Surges in 2024",
//       content:
//         "The tech industry sees tremendous growth in Q1 2024 due to advancements in AI and cloud investments.",
//     },
//     {
//       imageUrl: "https://via.placeholder.com/200x200",
//       headline: "Renewable Energy on the Rise",
//       content:
//         "Renewable energy sources are projected to account for 30% of global electricity production by 2030.",
//     },
//   ];

//   return (
//     <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
//       {storiesData.map((story, index) => (
//         <div key={index} className="snap-start">
//           <StoryCard
//             imageUrl={story.imageUrl}
//             headline={story.headline}
//             content={story.content}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stories;


// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import StoryCard from "../components/StoryCard";
// import { useAuthStore } from "../store/useAuthStore";

// const Stories = () => {
//   const navigate = useNavigate();


//   const {stories,approvedStory} = useAuthStore() 

//   const viewStory = (story) => {
//     navigate("/story-detail", { state: story });
//   };

//   useEffect(() => {
//     const funstory = async() => {
//       approvedStory()
//     }
//     funstory()
//   },[approvedStory])

//   const handlePublishClick = () => {
//     navigate("/login");
//     setMenuVisible(false); // Hide the menu when the publish button is clicked
//   };

//   return (
//     <div className="bg-black min-h-screen p-8">
//       {/* Page Heading */}
//       <h2 className="text-3xl font-bold text-white mb-6 text-center text-[3rem]">
//         Stories
//       </h2>

//       {/* Render Stories or Show Message */}
//       {stories && stories.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 py-10">
//           {stories.map((story, index) => (
//             <StoryCard key={index} story={story} onView={viewStory} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-400 text-center text-[1.8rem]">
//           No stories published yet.
//         </p>
//       )}
//       <div className="absolute top-20">
//       <button
//             onClick={handlePublishClick}
//             className="text-gray-300 bg-blue-600 font-semibold text-[1.3rem] cursor-pointer w-[12rem] rounded-md h-11"
//           >
//             Publish a Story
//           </button>
//           </div>
//     </div>
//   );
// };

// export default Stories;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StoryCard from "../components/StoryCard";
import { useAuthStore } from "../store/useAuthStore";

const Stories = () => {
  const navigate = useNavigate();

  const { stories, approvedStory } = useAuthStore();

  const viewStory = (story) => {
    console.log("Navigating to story-detail with story:", story);
    navigate("/story-detail", { state: {story} });
  };

  useEffect(() => {
    const funstory = async () => {
      approvedStory();
    };
    funstory();
  }, [approvedStory]);

  const handlePublishClick = () => {
    navigate("/login");
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
