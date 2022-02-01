import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 25%;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  & + & {
    margin-left: 8px;
  }
`;
