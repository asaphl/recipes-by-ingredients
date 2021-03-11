import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  const div = document.createElement("div"),
    modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    modalRoot.appendChild(div);
    return () => {
      modalRoot.removeChild(div);
    };
  });

  return ReactDOM.createPortal(children, div);
}

export default Modal;
