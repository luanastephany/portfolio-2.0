import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;

  .content {
    display: flex;
    height: 100%;
    width: 1000px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

    img {
      flex: 1;
      object-fit: cover;
    }

    .info {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;
      align-items: flex-end;
      padding: 24px;

      h1 {
        width: 100%;
        font-size: 30px;
        color: grey;
        font-weight: 500;
        letter-spacing: 1.5px;
      }

      p {
        flex: 1;
        line-height: 24px;
        letter-spacing: 1.1px;
        color: #636262;
      }

      a {
        display: flex;
        color: #fff;
        background: var(--pink);
        padding: 12px 18px;
        border-radius: 8px;
        letter-spacing: 1.1px;
        text-transform: uppercase;
        font-weight: 500;

        &:hover {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(1);
        }
      }
    }
  }
`;
