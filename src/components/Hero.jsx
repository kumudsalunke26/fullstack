import jsLogo from "../assets/js_logo.png";
import aryan from "../assets/aryan.png";
import spotify from "../assets/Spotify.svg";
import youtube from "../assets/Youtube.svg";
import SoundWave from "./SoundWave";

const Hero = () => {
    return (
        <div className='w-full relative overflow-hidden'>
            <SoundWave />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:mt-[-40px] ml-[-30px] lg:ml-[-65px]'>
                <div className='flex gap-2 items-center'>
                    <img
                        src={jsLogo}
                        alt='jsLogo'
                        className='object-cover h-[130px] md:h-[200px] lg:h-[300px] w-auto'
                    />
                    <img
                        src={aryan}
                        alt='Aryan'
                        className='object-cover h-[130px] md:h-[200px] lg:h-[300px] w-auto'
                    />
                </div>
                <div className='flex flex-row items-center mt-4 md:mt-[-10%] pl-4 h-16 z-50'>
                    <h2 className='text-2xl lg:text-3xl font-bold'>
                        Available on:
                    </h2>
                    <div className='ml-3 flex items-center justify-between gap-4 mt-2 md:mt-0'>
                        <a
                            href='https://www.spotify.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={spotify}
                                alt='Spotify'
                                className='h-8 md:h-10 object-cover'
                            />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UCO0mVgRyCGWXOqmJ3UukIlg'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={youtube}
                                alt='YouTube'
                                className='h-8 md:h-10 object-cover'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
