import styled from "styled-components";

const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  outline: 0;
  padding: 5px 5px;
  @media (min-width: 300px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: ${(props) => (props.size ? props.size : "auto")};
  }
`;

export default Input;
