import styled from "styled-components";

const ResponsiveRow = styled.div`
  display: flex;
  @media (min-width: 300px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default ResponsiveRow;
