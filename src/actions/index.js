import { ADD_ITEMS, REMOVE_ITEMS, ADD_COOKED } from "../constants/actions";

export const addItems = (items, listName) => {
  return {
    type: ADD_ITEMS,
    items: items,
    name: listName,
  };
};

export const removeItems = (items, listName) => {
  return {
    type: REMOVE_ITEMS,
    items: items,
    name: listName,
  };
};

export const addCooked = (title) => {
  return {
    type: ADD_COOKED,
    title: title,
  };
};
