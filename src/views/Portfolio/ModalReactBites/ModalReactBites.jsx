import React from "react";

import { Modal } from "../../../components";
import { descriptions } from "../constants";

const ModalReactBites = ({ closeModal }) => {
  const title = "React Bites";
  const description = descriptions.reactBites;
  const subtitle = "REACT";
  const src = "/static/react-bites.png";
  const url = "https://reactbites.netlify.app";
  const githubUrl = "https://github.com/AlbaCasas/react-bites";

  return (
    <Modal.Modal
      title={title}
      description={description}
      subtitle={subtitle}
      src={src}
      closeModal={closeModal}
    >
      <Modal.Buttons url={url} githubUrl={githubUrl} />
    </Modal.Modal>
  );
};

export default ModalReactBites;
