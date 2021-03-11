import React from "react";
import styled from "styled-components";
import SecondaryHeadline from "./styles/SecondaryHeadline";
import Badge from "./styles/Badge";
import Paragraph from "./styles/Paragraph";

const StyledRecipeItemThumbnail = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  background-image: url(${(props) => `../../pics/${props.thumb}`});
  background-size: cover;
  cursor: pointer;
  position: relative;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
  transition: 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

function RecipeItemThumbnail({ title, thumb, cooked, setPreview }) {
  const cookedBadge = cooked ? <Badge>Cooked!</Badge> : null;
  return (
    <StyledRecipeItemThumbnail thumb={thumb} onClick={() => setPreview(true)}>
      <Overlay>
        <SecondaryHeadline>{title}</SecondaryHeadline>
      </Overlay>
      {cookedBadge}
    </StyledRecipeItemThumbnail>
  );
}

export default RecipeItemThumbnail;
