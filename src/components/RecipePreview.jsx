import React from "react";
import styled from "styled-components";
import Button from "./styles/Button";
import ControlsContainer from "./styles/ControlsContainer";
import Headline from "./styles/Headline";
import SecondaryHeadline from "./styles/SecondaryHeadline";
import Paragraph from "./styles/Paragraph";
import ResponsiveRow from "./styles/ResponsiveRow";
import RecipeActionButton from "./RecipeActionButton";
import RecipeIngredientList from "./RecipeIngredientList";

const StyledRecipePreview = styled.div`
  visibility: ${(props) => (props.show ? "initial" : "none")};
  transition: 0.2s ease;
  width: 70%;
  height: 70%;
  border: 2px solid rgb(255, 122, 122);
  margin: auto;
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
`;

const RecipeImage = styled.div`
  height: 50vh;
  background-image: url(${(props) => `../../pics/${props.img}`});
  background-size: cover;
  margin-right: 25px;
  @media (min-width: 300px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Container = styled.div`
  max-height: 50vh;
  overflow: auto;
`;

function RecipePreview(props) {
  return (
    <StyledRecipePreview>
      <Headline>{props.title}</Headline>
      <Container>
        <ResponsiveRow>
          <RecipeImage img={props.picture} />
          <SecondaryHeadline>Ingredients:</SecondaryHeadline>
          <RecipeIngredientList {...props} />
        </ResponsiveRow>
        <SecondaryHeadline>Instructions:</SecondaryHeadline>
        <Paragraph>{props.desc}</Paragraph>
      </Container>
      <ControlsContainer inline style={{margin: "0px"}}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            props.setPreview(false);
          }}
        >
          Close
        </Button>
        <RecipeActionButton {...props} />
      </ControlsContainer>
    </StyledRecipePreview>
  );
}

export default RecipePreview;
