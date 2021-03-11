import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  createObjectFromList,
  isItemInList,
  missingItemsInList,
} from "../utils/listFunctions";
import List from "./styles/List";

const MissingIngredients = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
`;

function RecipeIngredientList(props) {
  const inventory = useSelector((state) => state.inventory);

  const subtractItemFromInventory = (item) => {
    const inventoryObj = createObjectFromList(inventory);
    return !inventoryObj[item.ingredient]
      ? -1 * item.amount
      : inventoryObj[item.ingredient] - item.amount;
  };

  const formatRecipeIngredient = (item) => {
    const isMissing = isItemInList(item, missingIngridientsList) ? true : false;
    const missingInfo = isMissing ? (
      <MissingIngredients>
        (You are missing
        {` ${Math.abs(subtractItemFromInventory(item)).toString()} ${item.ingredient}`})
      </MissingIngredients>
    ) : null;
    return (
      <li key={item.ingredient}>
        {item.amount} {item.ingredient} {missingInfo}
      </li>
    );
  };

  const missingIngridientsList = missingItemsInList(
    props.ingredients,
    inventory
  );

  return (
    <List>{props.ingredients.map((item) => formatRecipeIngredient(item))}</List>
  );
}

export default RecipeIngredientList;
