import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
const TopProdcast = () => {
    return (
        <Card className='py-4 w-[80%] mx-auto bg-black text-white grid lg:grid-cols-[2fr_4fr] gap-6'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                <h4 className='font-bold text-3xl'>
                    Navigating the waves of audio excellence
                </h4>
            </CardHeader>
            <div className='flex flex-col md:flex-row justify-center gap-2 flex-1 '>
                <CardBody className='overflow-visible py-2'>
                    <Image
                        alt='Card background'
                        className='object-cover rounded-xl'
                        src='https://img.freepik.com/premium-photo/podcast-live-streaming-microphone-with-sound-wave-magenta-backdrop-vertical-mobile-wallpaper_892776-28637.jpg'
                        width={270}
                    />
                </CardBody>
                <CardBody className='overflow-visible py-1 flex flex-row md:flex-col gap-4 md:gap-1 justify-between'>
                    <div className='font-semibold'>
                        Total Listeners
                        <h2 className='text-4xl font-bold text-purple-900'>
                            1.5M
                        </h2>
                    </div>
                    <div>
                        <div className='text-gray-600 font-normal text-md'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Sunt dignissimos ducimus veritatis laboriosam
                            ab illo voluptas nemo eaque reiciendis magnam
                            asperiores consequuntur modi nesciunt, iure unde
                            facilis quo necessitatibus. Maiores, totam aut?
                        </div>
                        <div className='my-5'>
                            <ul className='list-disc pl-6'>
                                <li>Engaging discussions on various topics</li>
                                <li>Insights from industry experts</li>
                                <li>Informative and entertaining episodes</li>
                            </ul>
                        </div>
                        <div>
                            <button className='border-2 border-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl'>
                                Explore Episodes
                            </button>
                        </div>
                    </div>
                </CardBody>
            </div>
        </Card>
    );
};

export default TopProdcast;
