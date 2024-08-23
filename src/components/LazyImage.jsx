import { useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={` object-cover transform group-hover:scale-105 transition-all duration-500 ${
          isLoaded ? "opacity-100  blur-none" : "opacity-25 blur-sm"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
