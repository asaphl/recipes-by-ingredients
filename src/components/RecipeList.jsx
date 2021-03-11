import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";
import styled from "styled-components";
import Headline from "./styles/Headline";
import requestData from "../utils/request";

const StyledRecipeList = styled.div`
  grid-area: RecipeList;
  border: 1px solid black;
  background-image: url("../../pics/bg.jpg");
  background-size: cover;
  padding: 0px 50px;
`;

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 300px) {
    max-height: auto;
    overflow: auto;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    max-height: 85vh;
    overflow: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
  }
`;

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    requestData("recipes").then((data) => setRecipes(data));
  }, []);

  return (
    <StyledRecipeList>
      <Headline>Recipe List</Headline>
      <GalleryContainer>
        {recipes.length
          ? recipes.map((recipe) => <RecipeItem {...recipe} />)
          : "Loading..."}
      </GalleryContainer>
    </StyledRecipeList>
  );
}

export default RecipeList;
