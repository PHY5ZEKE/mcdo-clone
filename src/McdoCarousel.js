import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import { carouselData } from "./carouselData";

function McdoCarousel() {
  return (
    <Carousel indicators className="custom-carousel">
      {carouselData.map((carouselItem, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage imagePath={carouselItem.image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default McdoCarousel;
