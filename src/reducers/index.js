import { combineReducers } from "redux";
import { LIST_INVENTORY, LIST_SHOPPING_LIST } from "../constants/listTypes";
import createList from "./createList";
import cookedReducer from "./cookedReducer";

const rootReducer = combineReducers({
  inventory: createList(LIST_INVENTORY),
  shoppingList: createList(LIST_SHOPPING_LIST),
  cooked: cookedReducer,
});

export default rootReducer;
