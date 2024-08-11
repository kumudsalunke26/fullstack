import { useState } from "react";
import HostCard from "../components/HostCard";
import PaginationSection from "../components/PaginationSection";
import SubsciptionSection from "../components/SubsciptionSection";

const Hostdata = [
    {
        id: 1,
        name: "Host One",
        genre: "Genre One",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hostone",
        instagram: "https://instagram.com/hostone",
        facebook: "https://facebook.com/hostone",
    },
    {
        id: 2,
        name: "Host Two",
        genre: "Genre Two",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hosttwo",
        instagram: "https://instagram.com/hosttwo",
        facebook: "https://facebook.com/hosttwo",
    },
    {
        id: 3,
        name: "Host Three",
        genre: "Genre Three",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hostthree",
        instagram: "https://instagram.com/hostthree",
        facebook: "https://facebook.com/hostthree",
    },
    {
        id: 3,
        name: "Host Three",
        genre: "Genre Three",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hostthree",
        instagram: "https://instagram.com/hostthree",
        facebook: "https://facebook.com/hostthree",
    },
    {
        id: 3,
        name: "Host Three",
        genre: "Genre Three",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hostthree",
        instagram: "https://instagram.com/hostthree",
        facebook: "https://facebook.com/hostthree",
    },
    {
        id: 3,
        name: "Host Three",
        genre: "Genre Three",
        image: "https://placehold.co/400x500",
        twitter: "https://twitter.com/hostthree",
        instagram: "https://instagram.com/hostthree",
        facebook: "https://facebook.com/hostthree",
    },
];

const HostsPage = () => {
    const [hoverValue, setHoverValue] = useState(null);

    const handleHover = (index) => {
        setHoverValue(index);
    };
    return (
        <div className='min-h-[100vh] mt-20 w-full'>
            <div className='flex flex-col md:flex-row gap-6 mx-auto w-[90%] lg:w-[70%] md:w-[80%]'>
                <h1 className='text-white text-4xl font-bold whitespace-nowrap'>
                    Our Hosts
                </h1>
                <div className='text-md'>
                    <p className='text-white'>
                        We are a collective of passionate dedicated to
                        delivering immersive audio experiences that resonate
                        with your heart & mind..
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap w-[90%] md:w-[80%] lg:w-[70%] gap-3 mx-auto mt-10'>
                {Hostdata.map((host, index) => (
                    <HostCard
                        key={index}
                        item={host}
                        index={index}
                        hoverValue={hoverValue}
                        handleHover={handleHover}
                    />
                ))}
            </div>
            <PaginationSection pages={7} page={3} />
            <SubsciptionSection />
        </div>
    );
};

export default HostsPage;
