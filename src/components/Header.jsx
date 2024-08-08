import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 bg-black px-10 md:px-20'>
            <div className='flex items-center'>
                <img src={logo} alt='Logo' className='w-28' />
            </div>
            <nav className='ml-4 hidden lg:flex text-white gap-10'>
                <Link to='/'>Episodes</Link>
                <Link to='/about'>Blogs</Link>
                <Link to='/services' className='mr-4'>
                    About us
                </Link>
                <Link to='/contact'>Team</Link>
                <Link to='/contact'>Subscribe</Link>
                <Link to='/contact'>Reviews</Link>
                <Link to='/contact'>Contact us</Link>
            </nav>

            <div className='flex items-center'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                    Contact Us
                </button>
            </div>
        </header>
    );
};

export default Header;
