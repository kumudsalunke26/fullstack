import { useState } from "react";
import HostCard from "./HostCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";

const OurTeamSection = ({ teamMembers, loading }) => {
  const [hoverValue, setHoverValue] = useState(null);

  if (!teamMembers) {
    return <ErrorAlert name={"Team Members"} />;
  }
  const handleHover = (index) => {
    setHoverValue(index);
  };

  return (
    <div
      className="flex flex-col gap-10 mt-20 w-[90%] lg:w-[70%] md:w-[80%] mx-auto"
      id="team">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-4xl font-extrabold">Our Team</h2>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
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
          className="mySwiper h-fit w-full">
          {teamMembers.map((teamMember, index) => (
            <SwiperSlide key={teamMember._id} className="h-fit w-full">
              <HostCard
                teamMember={teamMember}
                index={index}
                hoverValue={hoverValue}
                handleHover={handleHover}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default OurTeamSection;
