import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../styles/Button";
import { LIST_INVENTORY } from "../../constants/listTypes";
import { addCooked, removeItems } from "../../actions";
import { missingItemsInList } from "../../utils/listFunctions";

function CookButton({ ingredients, title }) {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  const missingIngridients = missingItemsInList(ingredients, inventory);

  return (
    <Button
      disabled={missingIngridients.length}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(removeItems(ingredients, LIST_INVENTORY));
        dispatch(addCooked(title));
      }}
    >
      Cook!
    </Button>
  );
}

export default CookButton;
