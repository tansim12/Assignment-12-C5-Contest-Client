// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const restaurantData = [
    {
      id: 1,

      image:
        "https://i.ibb.co/xf3dPzr/victorious-team-triumphs-sunset-with-trophy-numerous-silhouetted-hands-176841-15038.jpg",
    },
    {
      id: 2,

      image:
        "https://i.ibb.co/gJFccYj/blue-purple-background-with-word-vs-171308-1079.jpg", // Replace with the actual image URL
    },
    {
      id: 3,

      image:
        "https://i.ibb.co/mT5wDDp/illustrated-rendering-twin-avatar-23-2151061384.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ zIndex: 10 }}
      >
        {restaurantData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <img
              src={item?.image}
              alt=""
              className="h-[60vh] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
