import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
opacity: 0;
}
100% {
  opacity: 1;
}
`;

const SCButtonStyled = styled.button`
  animation: 1s ${fadeIn} ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    box-shadow: 0 0 0 5px,
      0 0 0 10px
        ${(props) => props.backgroundColor || props.theme.backgroundColor};
  }
  color: ${(props) => props.color || props.theme.color};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.backgroundColor};
  font-size: 1em;
  margin: 0.4em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 3px;
`;

export function SCButton({ children, ...props }) {
  return (
    <>
      <SCButtonStyled {...props}>{children}</SCButtonStyled>
    </>
  );
}
