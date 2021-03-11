import React, { useState } from "react";
import RecipePreview from "./RecipePreview";
import Modal from "./Modal";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RecipeItemThumbnail from "./RecipeItemThumbnail";
import RecipeActionButton from "./RecipeActionButton";

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRecipeItem = styled.div`
  margin: 10px;
  width: 150px;
`;

function RecipeItem(props) {
  const [showPreview, setPreview] = useState(false);
  const cooked = useSelector((state) => state.cooked);

  const previewModal = showPreview ? (
    <Modal>
      <ModalWrapper>
        <RecipePreview {...props} show={showPreview} setPreview={setPreview} />
      </ModalWrapper>
    </Modal>
  ) : null;

  return (
    <React.Fragment>
      <StyledRecipeItem>
        <RecipeItemThumbnail
          setPreview={setPreview}
          thumb={props.thumb}
          cooked={cooked.includes(props.title)}
          title={props.title}
        />
        <RecipeActionButton {...props} />
      </StyledRecipeItem>
      {previewModal}
    </React.Fragment>
  );
}

export default RecipeItem;
