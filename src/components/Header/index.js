import React from "react";
import { Contact, Wrapper } from "./styled";

const Header = () => {
  return (
    <Wrapper>
      <header>
        <img src="/logo3.png" alt="" />

        <Contact>
          <p>Work</p>
          <p>About</p>
          <p>Contact</p>
        </Contact>
      </header>
    </Wrapper>
  );
};

export default Header;
