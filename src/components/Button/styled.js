import styled from "styled-components";

export const Btn = styled.a`
  padding: 12px 18px;
  color: #fff;
  background-color: var(--pink);
  border-radius: 8px;
  border: 1px solid #fff;
  font-size: 18px;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;
