import React from "react";
import Button from "../styles/Button";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../../actions";
import { LIST_SHOPPING_LIST } from "../../constants/listTypes";
import { missingItemsInList } from "../../utils/listFunctions";

function AddToShoppingListButton({ ingredients }) {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const missingIngridients = missingItemsInList(ingredients, inventory);

  return (
    <Button
      disabled={!missingIngridients.length}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(addItems(missingIngridients, LIST_SHOPPING_LIST));
      }}
    >
      Add Missing Ing.
    </Button>
  );
}

export default AddToShoppingListButton;
