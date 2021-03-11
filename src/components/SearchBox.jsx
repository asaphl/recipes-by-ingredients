import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../actions";
import { LIST_SHOPPING_LIST } from "../constants/listTypes";
import styled from "styled-components";
import Button from "./styles/Button";
import Input from "./styles/Input";
import SuggestionBox from "./SuggestionBox";
import ResponsiveRow from "./styles/ResponsiveRow";

const StyledSearchBox = styled(ResponsiveRow)`
  position: relative;
`;

function SearchBox(props) {
  const [text, setText] = useState(""),
    [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  return (
    <StyledSearchBox>
      <Input
        type="text"
        size="60%"
        value={text}
        placeholder="Search for an ingredient..."
        onChange={(e) => setText(e.currentTarget.value)}
      ></Input>
      <SuggestionBox
        entity="ingredients"
        input={text}
        setInput={setText}
      ></SuggestionBox>
      <Input
        type="number"
        min="0"
        size="20%"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></Input>
      <br />
      <Button
        size="20%"
        onClick={() => {
          if (text) {
            dispatch(
              addItems(
                [{ ingredient: text, amount: parseInt(amount) }],
                LIST_SHOPPING_LIST
              )
            );
          }
        }}
      >
        +{/*Add to Shopping List*/}
      </Button>
    </StyledSearchBox>
  );
}

export default SearchBox;
