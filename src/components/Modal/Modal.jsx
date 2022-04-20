import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Flex } from "rebass/styled-components";

import Image from "../Image";
import ModalButtons from "./ModalButtons";
import ModalDescription from "./ModalDescription";
import ModalSubtitle from "./ModalSubtitle";
import ModalTitle from "./ModalTitle";
import { Backdrop, Content } from "./components";

const Modal = ({
  closeModal,
  children,
  description,
  subtitle,
  title,
  src,
  ...props
}) => {
  return (
    <Backdrop>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <Flex flexDirection="column">
          <Image src={src} alt={title} width="800px" />
          <Content onClick={closeModal} {...props}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              py={2}
              sx={{ gap: 2 }}
            >
              <ModalTitle>{title}</ModalTitle>
              <ModalSubtitle>{subtitle}</ModalSubtitle>
            </Flex>
            <ModalDescription>{description}</ModalDescription>
            {children}
          </Content>
        </Flex>
      </OutsideClickHandler>
    </Backdrop>
  );
};

export default {
  Modal: Modal,
  Buttons: ModalButtons,
};
