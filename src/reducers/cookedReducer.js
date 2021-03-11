import { ADD_COOKED } from "../constants/actions";

export default function cookedReducer(state = [], action) {
  switch (action.type) {
    case ADD_COOKED:
      if (!state.includes(action.title)) return [...state, action.title];
    default:
      return state;
  }
}
