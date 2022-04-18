import React from "react";
import { Backdrop, Content } from "./components";

const Modal = ({ children, ...props }) => {
  return (
    <Backdrop>
      <Content {...props}>{children}</Content>
    </Backdrop>
  );
};

export default Modal;
