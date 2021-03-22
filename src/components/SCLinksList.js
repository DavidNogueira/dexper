import React from "react";
import styled from "styled-components";

const SCLinksListStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  line-height: 1.6rem;
  text-decoration: none;
  overflow: auto;
  max-height:360px;
`;

export function SCLinksList({ children }) {
  return (
    <>
      <SCLinksListStyled>{children}</SCLinksListStyled>
    </>
  );
}
