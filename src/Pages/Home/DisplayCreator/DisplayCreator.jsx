import { globalInstance } from "../../../Hooks/useGlobalInstance";
import { useQuery } from "@tanstack/react-query";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import DisplayCreatorCard from "./DisplayCreatorCard";




const DisplayCreator = () => {
   

    const carousel = (slider) => {
        let z = 150
        function rotate() {
          const deg = 360 * slider.track.details.progress;
          slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
        }
        slider.on("created", () => {
          const deg = 360 / slider.slides.length;
          slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
          });
          rotate();
        });
        slider.on("detailsChanged", rotate);
        
      };
      

  const { data = [] } = useQuery({
    queryKey: ["displayCreatorInfo"],
    queryFn: async () => {
      try {
        const res = await globalInstance.get("/displayCreator");
        const fetchData = res.data;
        return fetchData;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
      }
    },
  });

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="flex justify-center items-center">
    <div className="wrapper">
      <div className="scene">
      <div className="carousel keen-slider" ref={sliderRef}>
          
          <div className="carousel__cell number-slide1">

            <DisplayCreatorCard item={data[0]} />
          </div>
          <div className="carousel__cell number-slide2">

            <DisplayCreatorCard item={data[1]} />
          </div>
          <div className="carousel__cell number-slide3">

            <DisplayCreatorCard item={data[2]} />
          </div>
         
        </div>
      </div>
      {/* </div> */}
    </div></div>
  );
};

export default DisplayCreator;
