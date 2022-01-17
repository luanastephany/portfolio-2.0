import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--primary);
  justify-content: center;
`;

export const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: var(--width);
  background-image: url("/bg.png");
  padding: 150px 0;
  background-repeat: no-repeat;
  background-size: 600px auto;
  background-position: right bottom;

  h1 {
    color: #fff;
    font-size: 48px;
    margin-bottom: 24px;
  }

  p {
    color: #fff;
    font-size: 20px;
    margin-bottom: 48px;
  }

  span {
    color: var(--pink);
  }
`;
