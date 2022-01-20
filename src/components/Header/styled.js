import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--secondary);
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 9999;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--width);

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: #fff;

  a {
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      color: var(--pink);
    }
  }
`;
