import styled from "styled-components";

const ControlsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: ${(props) => (props.noMargins ? "0px" : "5px")};
  @media
    (min-width: 300px) {
    flex-direction: column;
    align-items: strech;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default ControlsContainer;
