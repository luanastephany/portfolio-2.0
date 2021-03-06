import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  padding: 20px 0;

  .content {
    width: var(--width);
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      letter-spacing: 1.1px;

      &::before {
        content: " ";
        display: inline-block;
        width: 50px;
        height: 4px;
        background-color: var(--pink);
        margin: 0 24px 0 0;
      }
    }
    .work {
      color: #fff;
      font-size: 36px;
      font-family: "Poppins", sans-serif;
      width: 500px;
      opacity: 0.8;
      line-height: 20px;
      letter-spacing: 1.05px;
    }

    .contact-me {
      line-height: 24px;
    }

    p {
      color: #fff;
      font-family: "Poppins", sans-serif;
      width: 500px;
      opacity: 0.8;
      line-height: 20px;
      letter-spacing: 1.05px;
      margin-top: 18px;

      span {
        color: var(--pink);
      }
    }

    .icons {
      display: flex;
      gap: 12px;
      align-items: center;
      color: #fff;
      margin-top: 18px;

      a {
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .footer {
    display: flex;
    color: #fff;
    opacity: 0.2;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-top: 24px;
  }
`;
