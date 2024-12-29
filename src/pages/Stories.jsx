
import React from "react";
import StoryCard from "../components/StoryCard";

const Stories = () => {
  // Sample story data
  const storiesData = [
    {
      imageUrl: "https://via.placeholder.com/200x200",
      headline: "India's GDP growth could near 8% in FY24: RBI Governor Das",
      content:
        "RBI Governor Shaktikanta Das said the country's GDP growth in the current financial year could exceed the government's estimate of 7.6%.",
    },
    {
      imageUrl: "https://via.placeholder.com/200x200",
      headline: "Global Tech Industry Surges in 2024",
      content:
        "The tech industry sees tremendous growth in Q1 2024 due to advancements in AI and cloud investments.",
    },
    {
      imageUrl: "https://via.placeholder.com/200x200",
      headline: "Renewable Energy on the Rise",
      content:
        "Renewable energy sources are projected to account for 30% of global electricity production by 2030.",
    },
  ];

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
      {storiesData.map((story, index) => (
        <div key={index} className="snap-start">
          <StoryCard
            imageUrl={story.imageUrl}
            headline={story.headline}
            content={story.content}
          />
        </div>
      ))}
    </div>
  );
};

export default Stories;
