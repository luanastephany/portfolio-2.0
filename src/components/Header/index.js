import React from "react";
import { Contact, Wrapper } from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <header>
        <img src="/logo3.png" alt="" />

        <Contact>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Contact>
      </header>
    </Wrapper>
  );
};

export default Header;
