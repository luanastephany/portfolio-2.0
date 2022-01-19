import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  padding: 40px 0;

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
    margin-bottom: 20px;

    &::before {
      content: " ";
      display: inline-block;
      width: 50px;
      height: 4px;
      background-color: var(--pink);
      margin: 0 24px 3px 0;
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
    flex-direction: row;
    width: var(--width);
    color: #fff;

    .skills {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;
    }

    .skill {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;
