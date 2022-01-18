import React from "react";
import Button from "../../components/Button/Button";
import { HeroMain, Wrapper } from "./styled";

const Hero = () => {
  return (
    <Wrapper>
      <HeroMain>
        <h1>
          Hey, I'm <span>Luana</span>
        </h1>
        <p>
          I'm a self taught <span>frontend</span> developer
        </p>
        <Button href="https://github.com/luanastephany">See my work</Button>
      </HeroMain>
    </Wrapper>
  );
};

export default Hero;
