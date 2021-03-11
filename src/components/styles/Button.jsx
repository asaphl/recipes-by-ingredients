import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  border: 2px none red;
  padding: 10px 15px;
  background-color: rgb(255, 122, 122);
  color: white;
  font-weight: bold;
  font-size: 0.7rem;
  display: ${(props) => (props.inline ? "inline-block" : "block")};
  width: ${(props) => (props.size ? props.size : "100%")};
  outline: none;
  &:hover {
    background-color: rgb(255, 100, 100);
  }
  &:active {
    background-color: rgb(255, 50, 50);
  }
  &:disabled {
    background-color: rgb(100, 50, 50);
    color: rgb(200, 200, 200);
  }
`;

export default Button;
