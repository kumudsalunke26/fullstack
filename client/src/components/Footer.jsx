import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
      <footer className="text-mainText p-8 border-t-2 border-secondary mt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_4fr_2fr_2fr] gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img
              src={logo}
              alt="Logo"
              loading="lazy"
              className="w-28 h-fit ml-[-15px]"
            />
            <p className="text-sm text-center md:text-start">
              Journey Story was created to inspire through real-life experiences
              of entrepreneurs and leaders, offering insights and motivation for
              personal and professional growth.
            </p>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h2 className="text-2xl font-bold mb-3">Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/episodes" className="hover:underline">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://blogs.journeystory.in"
                    className="hover:underline">
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link to="/reviews" className="hover:underline">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:underline">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Where to listen</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://open.spotify.com/show/1ZQE9AUhjChYhjKTgUr3ld?si=9cc36ba0d51345c5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline">
                    Spotify
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@JourneyStoryHindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Contact Info</h2>
            <p className="text-sm">Email: ceo@journeystory.in</p>
            <p className="text-sm">Phone: +91 8530975857</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-3">Social Media</h2>
            <a
              href="https://x.com/JourneyStory_in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <BsTwitter className="text-3xl bg-background rounded-full p-1 border border-primary" />
              <div className="text-md">Twitter</div>
            </a>
            <a
              href=" https://www.instagram.com/journeystory_me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <FaInstagram className="text-3xl bg-background rounded-full p-1 border border-primary" />
              <div className="text-md">Instagram</div>
            </a>
            <a
              href="https://www.linkedin.com/company/journeystory/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <RiLinkedinBoxFill className="text-3xl bg-background rounded-full p-1 border border-primary" />
              <div className="text-md">LinkedIn</div>
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <p className="text-sm">© 2024 Journey Story</p>
          <br />
  
        </div>
      </footer>
    );
};

export default Footer;
