import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-black text-white p-8 border-t-2 border-gray-500 mt-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_4fr_2fr_2fr] gap-8'>
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
                        <h2 className='text-2xl font-bold mb-3'>Pages</h2>
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
                        <h2 className='text-2xl font-bold mb-3'>
                            Where to listen
                        </h2>
                        <ul className='space-y-2'>
                            <li>Spotify</li>
                            <li>Apple Podcasts</li>
                            <li>Google Podcasts</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-3'>Contact Info</h2>
                    <p className='text-sm'>Email: info@podkuthar.com</p>
                    <p className='text-sm'>Phone: 123-456-7890</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold mb-3'>Social Media</h2>
                    <a
                        href='https://twitter.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                    >
                        <BsTwitter className='text-3xl bg-purple-950 rounded-full p-1 border border-purple-500' />
                        <div className='text-md'>Twitter</div>
                    </a>
                    <a
                        href='https://instagram.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                    >
                        <FaInstagram className='text-3xl bg-purple-950 rounded-full p-1 border border-purple-500' />
                        <div className='text-md'>Instagram</div>
                    </a>
                    <a
                        href='https://facebook.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2'
                    >
                        <FaFacebook className='text-3xl bg-purple-950 rounded-full p-1 border border-purple-500' />
                        <div className='text-md'>Facebook</div>
                    </a>
                </div>
            </div>

            <div className='flex justify-center items-center mt-8'>
                <p className='text-sm'>© 2024 PODKUTHIR.</p>
            </div>
        </footer>
    );
};

export default Footer;
