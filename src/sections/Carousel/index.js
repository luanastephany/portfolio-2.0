import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },

    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },

    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
  ];

  return (
    <Slider
      className="slider-wrapper"
      duration={500}
      infinite={true}
      previousButton={<SlideButton isLeft />}
      nextButton={<SlideButton />}
    >
      {content.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
      {content.map((item) => (
        <SlideItem key={item.id} data={item} />
      ))}
    </Slider>
  );
};

export default Carousel;
