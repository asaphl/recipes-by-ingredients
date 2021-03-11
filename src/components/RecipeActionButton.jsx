import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./styles/Button";
import { LIST_INVENTORY, LIST_SHOPPING_LIST } from "../constants/listTypes";
import { addCooked, removeItems, addItems } from "../actions";
import { missingItemsInList } from "../utils/listFunctions";
import { RECIPE_COOK, RECIPE_ADD_MISSING_INGREDIENTS } from "../constants/recipeActions";

function RecipeActionButton({ ingredients, title }) {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const missingIngredients = missingItemsInList(ingredients, inventory);

  const action = missingIngredients.length ? RECIPE_ADD_MISSING_INGREDIENTS : RECIPE_COOK;

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        if (action === RECIPE_COOK){
            dispatch(removeItems(ingredients, LIST_INVENTORY));
            dispatch(addCooked(title));
        }
        if (action === RECIPE_ADD_MISSING_INGREDIENTS){
            dispatch(addItems(missingIngredients, LIST_SHOPPING_LIST));
        }
      }}
    >
      { action === RECIPE_COOK ? "Cook!" : "Add missing ingredients to sohpping list"}
    </Button>
  );
}

export default RecipeActionButton;