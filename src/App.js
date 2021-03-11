import React, { useEffect } from "react";
import Inventory from "./components/Inventory";
import ShoppingList from "./components/ShoppingList";
import RecipeList from "./components/RecipeList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addItems } from "./actions";
import { LIST_INVENTORY, LIST_SHOPPING_LIST } from "./constants/listTypes";

const StyledApp = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  @media only screen and (min-width: 320px) {
    display: block;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "Inventory RecipeList"
      "ShoppingList RecipeList";
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 2fr;
  }
`;

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { inventory, shoppingList } = initState;
    dispatch(addItems(inventory, LIST_INVENTORY));
    dispatch(addItems(shoppingList, LIST_SHOPPING_LIST));
  }, []);

  return (
    <StyledApp>
      <Inventory />
      <ShoppingList />
      <RecipeList />
      <div id="modal-root" />
    </StyledApp>
  );
}

const initState = {
  "inventory": [ 
    {
      "ingredient": "Spaghetti",
      "amount": 3
    },
    {
      "ingredient": "Onion",
      "amount": 2
    }, {
      "ingredient": "Tomato Sauce",
      "amount": 2
    }, {
      "ingredient": "Tomato",
      "amount": 5
    },  {
      "ingredient": "Garlic",
      "amount": 8
    },  {
      "ingredient": "Oregano",
      "amount": 1
    }
  ],
  "shoppingList": [ 
    {
      "ingredient": "Tomato",
      "amount": 5
    }
  ]
};

export default App;
