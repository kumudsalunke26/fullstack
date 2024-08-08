import heroImage from "../assets/hero.png";
import apple from "../assets/Apple-Prodcast.svg";
import google from "../assets/Google-Prodcast.svg";
import spotify from "../assets/Spotify.svg";

const Hero = () => {
    return (
        <div className='w-full mt-8'>
            <img src={heroImage} className='object-cover' alt='Hero' />
            <div className='flex items-center justify-center mt-5 h-16'>
                <h2 className='text-3xl font-bold'>Available on:</h2>
                <div className='ml-3 flex items-center justify-between gap-4'>
                    <img src={google} alt='' className='h-10 object-cover' />
                    <img src={apple} alt='' className='h-10 object-cover' />
                    <img src={spotify} alt='' className='h-10 object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
