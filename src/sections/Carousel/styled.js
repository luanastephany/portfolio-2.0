import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 80px 0;

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
