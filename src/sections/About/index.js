import { CgFigma } from "react-icons/cg";
import {
  FaCss3Alt,
  FaGitSquare,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiJavascript,
  SiNpm,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import Button from "../../components/Button/Button";
import { Wrapper } from "./styled";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="content">
        <div className="first-content">
          <h1>Who I am</h1>
          <p>I'm Luana Stephany, 26 years old, based in Vancouver, Canada.</p>
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
          <div className="skills">
            <h1>Development Skills</h1>
            <div className="skill">
              <FaHtml5 size={24} />
              <span>HTML</span>
            </div>
            <div className="skill">
              <FaCss3Alt size={24} />
              <span>CSS</span>
            </div>

            <div className="skill">
              <SiJavascript size={24} />
              <span>Javascript</span>
            </div>
            <div className="skill">
              <SiTypescript size={24} />
              <span>Typescript</span>
            </div>
            <div className="skill">
              <FaReact size={24} />
              <span>React</span>
            </div>
            <div className="skill">
              <FaGitSquare size={24} />
              <span>Git</span>
            </div>
            <div className="skill">
              <SiNpm size={24} />
              <span>NPM</span>
            </div>
          </div>

          <div className="skills">
            <h1>Design Skills</h1>
            <div className="skill">
              <FaSass size={24} />
              <span>Sass</span>
            </div>
            <div className="skill">
              <SiStyledcomponents size={24} />
              <span>Styled components</span>
            </div>
            <div className="skill">
              <CgFigma size={24} />
              <span>Figma</span>
            </div>
            <div className="skill">
              <SiAdobephotoshop size={24} />
              <span>Photoshop</span>
            </div>
            <div className="skill">
              <SiAdobexd size={24} />
              <span>Adobe XD</span>
            </div>
          </div>
        </div>
        <Button href="https://www.linkedin.com/in/luana-stephany/">
          Know more
        </Button>
      </div>
    </Wrapper>
  );
};

export default About;
