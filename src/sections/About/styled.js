import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  padding: 20px 0;

  .content {
    width: var(--width);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
  }

  .first-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: var(--width);
    color: #fff;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.1px;

    &::before {
      content: " ";
      display: inline-block;
      width: 50px;
      height: 6px;
      background-color: var(--pink);
      margin: 0 24px 0 0;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    width: 500px;
    opacity: 0.8;
    line-height: 20px;
    letter-spacing: 1.05px;
  }

  .second-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: var(--width);
    color: #fff;
  }
`;
