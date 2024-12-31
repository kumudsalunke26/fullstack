const VideoSection = () => {
    return (
        <div className='flex justify-center items-center w-full mt-20'>
            <div
                className='relative w-[90%] md:w-[80%] mx-auto'
                style={{ paddingTop: "35.25%" }}
            >
                <iframe
                    className='absolute top-0 left-0 w-full h-full'
                    src='https://www.youtube.com/embed/smPos0mJvh8'
                    title='Meet the new Framer'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerpolicy='strict-origin-when-cross-origin'
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoSection;
