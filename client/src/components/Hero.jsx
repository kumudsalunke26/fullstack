import heroImage from "../assets/hero.png";
import spotify from "../assets/Spotify.svg";
import youtube from "../assets/Youtube.svg";
// jst checking new remote
const Hero = () => {
    return (
      <div className="w-full mt-8">
        <img
          src={heroImage}
          className="object-cover"
          alt="Hero"
          loading="lazy"
        />
        <div className="flex items-center justify-center mt-5 h-16">
          <h2 className="text-3xl font-bold">Available on:</h2>
          <div className="ml-3 flex items-center justify-between gap-4">
            <a
              href="https://open.spotify.com/show/1ZQE9AUhjChYhjKTgUr3ld"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={spotify}
                alt="Spotify"
                loading="lazy"
                className="h-10 object-cover"
              />
            </a>
            <a
              href="https://www.youtube.com/@JourneyStoryHindi"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={youtube}
                alt="YouTube"
                loading="lazy"
                className="h-10 object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    );
};

export default Hero;
