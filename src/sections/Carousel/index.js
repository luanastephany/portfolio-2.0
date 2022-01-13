import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SlideItem from "../../components/SlideItem";
import { SlideButtonWrapper } from "./styled";

const SlideButtonLeft = (clickHandler) => {
  return (
    <SlideButtonWrapper onClick={clickHandler}>
      <FaArrowLeft />
    </SlideButtonWrapper>
  );
};

const SlideButtonRight = (clickHandler) => {
  return (
    <SlideButtonWrapper onClick={clickHandler}>
      <FaArrowRight />
    </SlideButtonWrapper>
  );
};

const CarouselItem = () => {
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
    <Carousel
      className="slider-wrapper"
      infinite={true}
      ariaLabel
      renderArrowPrev={SlideButtonLeft}
      renderArrowNext={SlideButtonRight}
    >
      {content.map((item) => (
        <div>
          <SlideItem key={item.id} data={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
