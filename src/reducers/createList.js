import { ADD_ITEMS, REMOVE_ITEMS } from "../constants/actions";
import { addListAToListB, removeListAFromListB } from "../utils/listFunctions";

export default function createList(listName) {
  return function listReducer(state = [], action) {
    const { name } = action;
    if (name !== listName) return state;
    switch (action.type) {
      case ADD_ITEMS:
        return addListAToListB(action.items, state);
      case REMOVE_ITEMS:
        return removeListAFromListB(action.items, state);
      default:
        return state;
    }
  };
}
