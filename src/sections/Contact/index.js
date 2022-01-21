import React from "react";
import { FaFilePdf, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Wrapper } from "./styled";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="content">
        <h1>Contact</h1>
        <p className="work">
          Wanna <span>work</span> with me?
        </p>
        <p className="contact-me">
          Send an email to <span>ls.luanastephany</span> or contact me through
          one of the platforms below. And you can also see my resume.
        </p>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/luana-stephany-aa012b204/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://github.com/luanastephany"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={24} />
          </a>

          <a href="https://google.com" target="_blank" rel="noreferrer">
            <FaFilePdf size={24} />
          </a>
        </div>
      </div>

      <p className="footer">2022 - Luana Stephany</p>
    </Wrapper>
  );
};

export default Contact;
