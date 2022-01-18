import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  justify-content: center;

  .control-dots {
    bottom: 10px;

    .dot {
      background-color: #fff;
      opacity: 0.8;
    }

    .dot.selected {
      background-color: #ffc7c4;
    }
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

export const AboutWork = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: var(--width);
  }

  p {
    color: var(--pink);
    opacity: 0.8;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;

    &::before {
      content: " ";
      display: inline-block;
      width: 50px;
      height: 6px;
      background-color: var(--pink);
      margin: 0 24px 0 0;
    }
  }

  h1 {
    color: #808080;
    margin-bottom: 8px;
  }
`;

export const SlideButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pink);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 999;
  top: calc(50% - 20px);
  margin-left: 24px;
  margin-right: 24px;
  position: absolute;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
