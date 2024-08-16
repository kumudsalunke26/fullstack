import React from "react";
import heroImage from "../assets/hero.png";
import spotify from "../assets/Spotify.svg";
import youtube from "../assets/Youtube.svg";
import video from "../assets/soundwaves.mp4"; // Replace with your video path

const Hero = () => {
  return (
    <div className="relative w-full mt-8 h-[75vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15 pointer-events-none"
        src={video}
        autoPlay
        muted
        loop></video>

      {/* Foreground Image */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <img
          src={heroImage}
          className="object-cover max-h-[75vh] w-full"
          alt="Hero"
        />
        <div className="flex items-center justify-center mt-5 h-16">
          <h2 className="text-3xl font-bold text-white">Available on:</h2>
          <div className="ml-3 flex items-center gap-4">
            <a
              href="https://www.spotify.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={spotify} alt="Spotify" className="h-10 object-cover" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="h-10 object-cover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
