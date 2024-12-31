import React from "react";


const StoryCard = ({ story, onView }) => {
  
  return (
    <div
      className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
      onClick={() => onView(story)} // Trigger onView with the story data
    >
      
{story.imageUrl && (
  <img
    src={story.imageUrl}
    alt="Story"
    className="w-full h-[20rem] md:h-[25rem] object-cover object-center"
  />
)}


 <div className="absolute top-[19rem] sm:top-[24rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
  <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
</div>


     

      {/* Story Headline and Content */}
      <div className="relative p-4 gap-2">
        {/* Story Headline */}
        {story.title && (
          <h2 className="text-lg md:text-xl font-bold text-white h-[3rem] pt-4">
            {story.title}
          </h2>
        )}
        {/* Story Content Preview */}
        {story.content && (
          <p className="text-sm md:text-base text-gray-300 mt-4">
            {story.content.slice(0, 100)}...
          </p>
        )}
      </div>
    </div>
  );
};

export default StoryCard;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const StoryCard = ({ story }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
//       onClick={() => navigate("/story-detail", { state: story })} // Pass story data via state
//     >
//       {story.imageUrl && (
//         <img
//           src={story.imageUrl}
//           alt="Story"
//           className="w-full h-[20rem] md:h-[25rem] object-cover object-center"
//         />
//       )}
//       <div className="absolute top-[19rem] sm:top-[24rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
//         <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
//       </div>
//       <div className="relative p-4 gap-2">
//         {story.title && (
//           <h2 className="text-lg md:text-xl font-bold text-white h-[3rem] pt-4">
//             {story.title}
//           </h2>
//         )}
//         {story.content && (
//           <p className="text-sm md:text-base text-gray-300 mt-4">
//             {story.content.slice(0, 100)}...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StoryCard;



// import React from "react";
// import { useNavigate } from "react-router-dom";

// const StoryCard = ({ story }) => {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     navigate("/story-detail", { state: story }); // Pass story data via state
//   };

//   return (
//     <div
//       className="relative bg-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-full mx-auto mb-6"
//       onClick={handleNavigation} // Call handleNavigation on click
//     >
//       {story.imageUrl && (
//         <img
//           src={story.imageUrl}
//           alt="Story"
//           className="w-full h-[20rem] md:h-[25rem] object-cover object-center"
//         />
//       )}
//       <div className="absolute top-[19rem] sm:top-[24rem] left-2 sm:left-4 bg-white py-1 px-2 sm:px-3 rounded-full shadow-lg">
//         <span className="text-black font-semibold text-xs sm:text-sm">JourneyStory</span>
//       </div>
//       <div className="relative p-4 gap-2">
//         {story.title && (
//           <h2 className="text-lg md:text-xl font-bold text-white h-[3rem] pt-4">
//             {story.title}
//           </h2>
//         )}
//         {story.content && (
//           <p className="text-sm md:text-base text-gray-300 mt-4">
//             {story.content.slice(0, 100)}...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StoryCard;


