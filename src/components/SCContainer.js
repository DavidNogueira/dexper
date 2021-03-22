import React from "react";
import styled from "styled-components";

const SCContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;

export function SCContainer({ children }) {
  return (
    <>
      <SCContainerStyled>{children}</SCContainerStyled>
    </>
  );
}
