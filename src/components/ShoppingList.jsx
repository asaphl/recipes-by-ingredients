import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LIST_INVENTORY, LIST_SHOPPING_LIST } from "../constants/listTypes";
import { addItems, removeItems } from "../actions";
import SearchBox from "./SearchBox";
import styled from "styled-components";
import Button from "./styles/Button";
import Headline from "./styles/Headline";
import List from "./styles/List";
import ListHeading from "./styles/ListHeading";

const StyledShoppingList = styled.div`
  grid-area: ShoppingList;
  border: 1px solid black;
  overflow: auto;
  background-color: #f5f5f5;
  background: linear-gradient(to bottom, #f5f5f5 95%, rgba(0, 0, 0, 40%) 5%);
  background-size: 100% 30px;
  padding: 0 20px 0 40px;
  font-family: 'Caveat', cursive;;
  line-height: 30px;
  position: relative;
`;

const NootebookDecoration = styled.div`
  position: fixed;
  height: 100%;
  width: 5px;
  border-left: 1px solid rgba(255, 0, 0, 50%);
  border-right: 1px solid rgba(255, 0, 0, 50%);
  margin-left: -20px;
`;

function ShoppingList(props) {
  const items = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  return (
    <StyledShoppingList>
      <NootebookDecoration />
      <Headline>Shopping List</Headline>
      <SearchBox />
      <ListHeading>{items.length ? "We need:" : "Nothing to buy!"}</ListHeading>
      <List>
        {items.map((item, i) => {
          return (
            <li key={i}>
              {item.amount} {item.ingredient}
            </li>
          );
        })}
      </List>
      <Button
        size="100%"
        onClick={() => {
          dispatch(addItems(items, LIST_INVENTORY));
          dispatch(removeItems(items, LIST_SHOPPING_LIST));
        }}
      >
        Buy!
      </Button>
    </StyledShoppingList>
  );
}

export default ShoppingList;
