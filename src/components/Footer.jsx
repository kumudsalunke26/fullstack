import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-black text-white p-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <PiApplePodcastsLogo className='text-4xl mb-4' />
                    <h3 className='text-xl font-semibold mb-2'>Podkuthar</h3>
                    <p className='text-sm'>
                        Whether you're a seasoned listener or a newcomer to the
                        world of podcasts, our platform provides a hub for
                        discovery, connection, and continuous learning.
                    </p>
                </div>
                <div className='flex justify-between flex-1'>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Pages</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to='/' className='hover:underline'>
                                    Episodes
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className='hover:underline'>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/services'
                                    className='hover:underline'
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:underline'>
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:underline'>
                                    Subscribe
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:underline'>
                                    Reviews
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact' className='hover:underline'>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>
                            Where to Listen
                        </h3>
                        <ul className='space-y-2'>
                            <li>Spotify</li>
                            <li>Apple Podcasts</li>
                            <li>Google Podcasts</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-2'>Contact Info</h3>
                    <p className='text-sm'>Email: info@podkuthar.com</p>
                    <p className='text-sm'>Phone: 123-456-7890</p>
                </div>
            </div>
            <div className='flex justify-center space-x-4 mt-4'>
                <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsTwitter className='text-2xl' />
                </a>
                <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <ImInstagram className='text-2xl' />
                </a>
                <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaFacebook className='text-2xl' />
                </a>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <FaStarOfLife className='text-md' />
                <p className='text-sm'>© 2024 PODKUTHIR.</p>
                <FaStarOfLife className='text-md' />
            </div>
        </footer>
    );
};

export default Footer;
