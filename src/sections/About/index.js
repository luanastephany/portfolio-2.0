import React from "react";
import Button from "../../components/Button/Button";
import { Wrapper } from "./styled";

const About = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="first-content">
          <h1>Who I am</h1>
          <p>I'm Luana Stephany, 26 years old and I'm from Brazil.</p>
          <p>
            Currently going through a career transition from nursing to
            developer. My focus is on frontend applications using React and
            Typescript.
          </p>
          <p>
            I am creative, teamplayer, organized, and easily able to develop
            interpersonal and team relationships.
          </p>
        </div>

        <div className="second-content">
          <h1>Skills</h1>
          <p>
            Development: HTML, CSS/SCSS, JavaScript, Typescript, ReactJs,
            Styled-components, NPM e Git
          </p>
          <p>Design: Figma, Photoshop</p>
        </div>
        <Button href="https://www.linkedin.com/in/luana-stephany-aa012b204/">
          Know more
        </Button>
      </div>
    </Wrapper>
  );
};

export default About;
