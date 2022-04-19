import React from "react";
import { Flex } from "rebass/styled-components";

import Image from "../Image";
import ModalDescription from "./ModalDescription";
import ModalSubtitle from "./ModalSubtitle";
import ModalTitle from "./ModalTitle";
import { Backdrop, Content } from "./components";

const Modal = ({
  setIsShowModal,
  children,
  description,
  subtitle,
  title,
  ...props
}) => {
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <Backdrop>
      <Flex flexDirection="column">
        <Image src="static/preview.png" alt={title} width="968px" />
        <Content onClick={closeModal} {...props}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            py={2}
            sx={{ borderBottom: "1px solid red", gap: 2 }}
          >
            <ModalTitle>{title}</ModalTitle>
            <ModalSubtitle>{subtitle}</ModalSubtitle>
          </Flex>
          <ModalDescription>{description}</ModalDescription>
          {children}
        </Content>
      </Flex>
    </Backdrop>
  );
};

export default Modal;
