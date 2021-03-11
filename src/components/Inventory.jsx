import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import List from "./styles/List";
import Headline from "./styles/Headline";

const StyledInventory = styled.div`
  grid-area: Inventory;
  border: 1px solid black;
  overflow: auto;
  font-family: 'Caveat', cursive;;
  background-color: rgb(29, 31, 39);
  color: white;
  text-align: center;
`;

function Inventory() {
  const items = useSelector((state) => state.inventory);

  const renderItems = items.map((item, index) => (
    <li key={index}>
      <b>{item.ingredient}:</b> {item.amount}
    </li>
  ));
  return (
    <StyledInventory>
      <Headline>Available ingredients:</Headline>
      <List>{renderItems}</List>
    </StyledInventory>
  );
}

export default Inventory;
