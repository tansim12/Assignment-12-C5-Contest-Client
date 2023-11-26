
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
        "https://i.ibb.co/K5gwRVy/photo-1600891964599-f61ba0e24092-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg", // Replace with the actual image URL
    },
    {
      id: 2,
      title: "Café Parisienne",
      description:
        "Experience the taste of Paris in every bite. Our croissants, pastries, and coffee will transport you to France.",
      image:
        "https://i.ibb.co/2KTcGWt/photo-1576866206930-9c7e5fe27e3e-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg", // Replace with the actual image URL
    },
    {
      id: 3,
      title: "Sushi Savor",
      description:
        "Savor the art of sushi making at its finest. Fresh fish, expertly prepared, for a delightful dining experience.",
      image:
        "https://i.ibb.co/6bJStp2/photo-1576867757603-05b134ebc379-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg", // Replace with the actual image URL
    },
    {
      id: 4,
      title: "Spice Haven",
      description:
        "Get ready for a flavorful adventure. Our menu offers a variety of spicy dishes from around the world.",
      image:
        "https://i.ibb.co/k6NmbhV/photo-1504674900247-0877df9cc836-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg", // Replace with the actual image URL
    },
    {
      id: 5,
      title: "Mediterranean Delights",
      description:
        "Indulge in the flavors of the Mediterranean. Our dishes are a blend of fresh ingredients and rich traditions.",
      image:
        "https://i.ibb.co/frZyCqv/photo-1499028344343-cd173ffc68a9-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg ", // Replace with the actual image URL
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
                minHeight:"70vh",
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



