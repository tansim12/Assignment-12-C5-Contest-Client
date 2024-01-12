
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
      title: "Delicious Bistro",
      description:
        "Enjoy a wide range of gourmet dishes prepared by our top chefs. From steaks to seafood, we have it all.",
      image:
        "https://i.ibb.co/FhkBg0s/pngtree-color-creative-silhouette-knowledge-contest-poster-background-material-picture-image-1011376.png", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Café Parisienne",
      description:
        "Experience the taste of Paris in every bite. Our croissants, pastries, and coffee will transport you to France.",
      image:
        "https://i.ibb.co/2Y9fg66/pngtree-geometric-gradient-silhouette-english-speech-contest-poster-background-material-picture-imag.png", // Replace with the actual image URL
    },
    {
      id: 3,
      title: "Sushi Savor",
      description:
        "Savor the art of sushi making at its finest. Fresh fish, expertly prepared, for a delightful dining experience.",
      image:
        "https://i.ibb.co/0K1KhzZ/pngtree-vs-pop-art-background-with-light-effect-picture-image-1208990.png", // Replace with the actual image URL
    },
    
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{zIndex:10}}
      >
        {restaurantData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div
              className="hero min-h-screen w-full"
              style={{
                backgroundImage: `url(${item?.image})`,
                minHeight:"50vh",
                width:"100%",
                backgroundSize:"cover",
                
              }}
            >
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;



