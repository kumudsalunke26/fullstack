import { useState } from "react";
import HostCard from "./HostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hostdata = [
    {
        id: 1,
        name: "Host One",
        genre: "Genre One",
        image: "https://framerusercontent.com/images/3uJzVRICn4pm6lVQS9D1Ay6vE3s.png",
        twitter: "https://twitter.com/hostone",
        instagram: "https://instagram.com/hostone",
        facebook: "https://facebook.com/hostone",
    },
    {
        id: 2,
        name: "Host Two",
        genre: "Genre Two",
        image: "https://framerusercontent.com/images/EOoXpC53qqokDoHkOj8EZFqT5a4.png?scale-down-to=1024",
        twitter: "https://twitter.com/hosttwo",
        instagram: "https://instagram.com/hosttwo",
        facebook: "https://facebook.com/hosttwo",
    },
    {
        id: 3,
        name: "Host Three",
        genre: "Genre Three",
        image: "https://framerusercontent.com/images/0vaI7XIJ0hmlGmTh4HLjPf5uPOA.png",
        twitter: "https://twitter.com/hostthree",
        instagram: "https://instagram.com/hostthree",
        facebook: "https://facebook.com/hostthree",
    },
];

const OurTeamSection = () => {
    const [hoverValue, setHoverValue] = useState(null);

    const handleHover = (index) => {
        setHoverValue(index);
    };

    return (
        <div
            className='flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'
            id='team'
        >
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-4xl font-extrabold'>Our team</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className='mySwiper min-h-[400px] w-full'
            >
                {Hostdata.map((host, index) => (
                    <SwiperSlide key={index}>
                        <HostCard
                            item={host}
                            index={index}
                            hoverValue={hoverValue}
                            handleHover={handleHover}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurTeamSection;
