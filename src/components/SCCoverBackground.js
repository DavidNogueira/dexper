import React from "react";
import styled from "styled-components";

const SCCoverBackgroundStyled = styled.img.attrs((props) => ({
  src: props.bgImage,
}))`
  width: 300px;
  height: 370px;
  border: 2px solid #000;

  ${({ theme }) => theme.media.mediumBreak} {
    height: 250px;
    width: 180px;
  }
`;

export function SCCoverBackground({ ...props }) {
  return (
    <>
      {props.bgImage ? (
        <SCCoverBackgroundStyled {...props} />
      ) : (
        <div>No image ATM</div>
      )}
    </>
  );
}
