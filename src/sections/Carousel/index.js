import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SlideItem from "../../components/SlideItem";
import { SlideButtonWrapper } from "./styled";

const SlideButton = ({ isLeft }) => {
  return (
    <SlideButtonWrapper>
      {isLeft ? <FaArrowLeft /> : <FaArrowRight />}
    </SlideButtonWrapper>
  );
};

const Carousel = () => {
  const content = [
    {
      id: 1,
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Github",
      link: "https://www.github.com",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },

    {
      id: 2,
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Github",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },

    {
      id: 3,
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Github",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
  ];

  return (
    <Slider
      className="slider-wrapper"
      infinite={true}
      previousButton={<SlideButton isLeft />}
      nextButton={<SlideButton />}
    >
      {content.map((item) => (
        <div>
          <SlideItem key={item.id} data={item} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
