import React from "react";
import styled from "styled-components";

const SCCardStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  ${({ theme }) => theme.media.mediumBreak} {
    flex-direction: column;
    align-items: center;
  }
`;

export function SCCard({ children }) {
  return (
    <>
      <SCCardStyled>{children}</SCCardStyled>
    </>
  );
}
