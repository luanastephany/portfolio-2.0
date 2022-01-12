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
      title: "Afrianska",
      description:
        "A landing page project with three different pages, so react routes were used to develop it.",
      button: "Github",
      link: "https://github.com/luanastephany/afrianska-landing-page",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
    },

    {
      id: 2,
      title: "Short Links",
      description:
        "After entering the original link and a custom name, a new shortened link will be generated.",
      button: "Github",
      link: "https://github.com/luanastephany/encurtador",
      image: "https://i.imgur.com/DCdBXcq.jpg",
    },

    {
      id: 3,
      title: "Bookstore",
      description:
        "Project made to have the experience of using Strapi to develop an API with the books, their authors, cover and rank.",
      button: "Github",
      link: "https://github.com/luanastephany/bookstore",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
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
