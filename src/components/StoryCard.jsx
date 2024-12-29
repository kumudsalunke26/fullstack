import React from "react";

const StoryCard = ({ imageUrl, headline, content }) => {
    return (
        <div className="h-screen flex items-center justify-center mt-11 ">
            <div className="relative max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden max-h-md">
                {/* Image */}
                <div className="relative">
                    <img
                        src={imageUrl}
                        alt="Story"
                        className="w-full h-52 object-cover"
                    />
                </div>
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full shadow-lg mt-44">
                    <span className="text-gray-900 font-semibold text-sm">JourneyStory</span>
                </div>
                {/* Text Content */}
                <div className="p-6 h-[20rem]">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{headline}</h2>
                    <p className="text-gray-800 text-lg">{content}</p>
                    <h4 className="text-gray-600 text-medium pt-3 italic mb-7">swipe left for more</h4>
                    <p className="bg-gray-800 absolute bottom-0 left-0 right-0 pb-5 pt-5 pl-6">MORE DETAILS...</p>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
