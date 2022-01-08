import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #0b0e24;
  justify-content: center;
`;

export const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
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
    color: #fd4370;
  }
`;
