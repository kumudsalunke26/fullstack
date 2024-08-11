import { useState } from "react";
import HostCard from "./HostCard";
import { Button } from "@nextui-org/react";
import PrimaryButton from "./PrimaryButton";

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
];

const OurTeamSection = () => {
    const [hoverValue, setHoverValue] = useState(null);

    const handleHover = (index) => {
        setHoverValue(index);
    };

    return (
        <div className='flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-4xl font-extrabold'>Our team</h2>
                <PrimaryButton text='See All Hosts' toLink='/hosts' />
            </div>
            <div className='flex flex-wrap items-center justify-center md:justify-normal gap-8 px-10'>
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
        </div>
    );
};

export default OurTeamSection;
