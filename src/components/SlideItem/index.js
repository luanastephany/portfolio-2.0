import React from "react";
import { Wrapper } from "./styled";

const SlideItem = ({ data }) => {
  return (
    <Wrapper>
      <div className="content">
        <img src={data.image} alt="" />
        <div className="info">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <a href={data.link} target="_blank" rel="noreferrer">
            {data.button}
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default SlideItem;
