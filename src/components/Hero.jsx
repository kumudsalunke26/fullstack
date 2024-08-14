import heroImage from "../assets/hero.png";
import apple from "../assets/Apple-Prodcast.svg";
import google from "../assets/Google-Prodcast.svg";
import spotify from "../assets/Spotify.svg";
import youtube from "../assets/Youtube.svg";

const Hero = () => {
    return (
        <div className='w-full mt-8'>
            <img src={heroImage} className='object-cover' alt='Hero' />
            <div className='flex items-center justify-center mt-5 h-16'>
                <h2 className='text-3xl font-bold'>Available on:</h2>
                <div className='ml-3 flex items-center justify-between gap-4'>
                    <a
                        href='https://podcasts.google.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={google}
                            alt='Google Podcast'
                            className='h-10 object-cover'
                        />
                    </a>
                    <a
                        href='https://podcasts.apple.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={apple}
                            alt='Apple Podcast'
                            className='h-10 object-cover'
                        />
                    </a>
                    <a
                        href='https://www.spotify.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={spotify}
                            alt='Spotify'
                            className='h-10 object-cover'
                        />
                    </a>
                    <a
                        href='https://www.youtube.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={youtube}
                            alt='YouTube'
                            className='h-10 object-cover'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
