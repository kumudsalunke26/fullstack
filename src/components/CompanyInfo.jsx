import { Avatar } from "@nextui-org/avatar";
import { motion } from "framer-motion";
import spotify from "../assets/Spotify.svg";
import youtube from "../assets/Youtube.svg";

const CompanyInfo = () => {
    return (
        <div className='bg-transparent w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <h2 className='text-2xl md:text-4xl font-extrabold'>
                Journey Story
            </h2>

            <motion.div
                initial={{ y: "50%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-10 grid md:grid-cols-2 lg:grid-cols-[3fr_3fr_2fr] gap-6'
            >
                <div className='flex flex-col gap-4'>
                    <p className='text-mainText text-lg'>
                        Navigating Audio Excellence Where Stories Set Sail
                        Podcast Pioneers in Action Sculptors of Sonic Stories
                    </p>
                    <p className='text-mainText'>
                        Journey Story's narrative unfolds as a story fueled by
                        passion, innovation, and a dedication to fostering a
                        lively community of audio enthusiasts. Originating as a
                        concept rooted in a collective love for storytelling,
                        diverse voices come together, and captivating stories
                        come to life.
                    </p>
                    <p className='text-mainText'>
                        Remaining committed to constant growth, Journey Story
                        has adeptly sailed through the dynamic waves of the
                        expanding podcasting realm, consistently adapting and
                        embracing emerging trends. This commitment ensures an
                        enriching experience for both creators and listeners
                        alike.
                    </p>
                    <div className='flex gap-3'>
                        <div className='flex'>
                            <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
                            <Avatar
                                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                                className='ml-[-10px]'
                            />
                            <Avatar
                                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                                className='ml-[-10px]'
                            />
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold text-primary'>
                                +16 k
                            </h2>
                            <p>Worldwide Podcaster</p>
                        </div>
                    </div>
                </div>
                <div className='px-2 w-full h-[650px] md:h-full md:min-w-[250px] overflow-hidden'>
                    <img
                        src='https://framerusercontent.com/images/2PiliRgNnLnYKoYwe11bgOLUY.png'
                        className='object-cover'
                    />
                    <div className='flex lg:hidden items-center justify-between mt-5 h-16'>
                        <h2 className='text-xl font-bold'>Available on:</h2>
                        <div className='ml-3 flex items-center justify-between gap-4'>
                            <a
                                href='https://www.spotify.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={spotify}
                                    alt='Spotify'
                                    className='h-8 object-cover'
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
                                    className='h-8 object-cover'
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex-col gap-4 hidden lg:flex'>
                    <img
                        src='https://framerusercontent.com/images/sGtLM8QqwydirNiuKtc0l73rHSg.png'
                        className='w-[200px]'
                    />
                    <div className='flex flex-col items-center justify-between mt-5 h-16'>
                        <h2 className='text-xl font-bold'>Available on:</h2>
                        <div className='ml-3 flex items-center justify-between gap-4'>
                            <a
                                href='https://www.spotify.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img
                                    src={spotify}
                                    alt='Spotify'
                                    className='h-8 object-cover'
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
                                    className='h-8 object-cover'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CompanyInfo;
