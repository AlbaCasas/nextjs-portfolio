import React from "react";

import { Modal } from "../../../components";
import { descriptions } from "../constants";

const ModalJobly = ({ closeModal }) => {
  const title = "Jobly";
  const description = descriptions.jobly;
  const subtitle = "MERN STACK";
  const src = "static/preview.png";
  const url = "https://jobly-ac.netlify.app";
  const githubUrl = "https://github.com/AlbaCasas/jobly";
  
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

export default ModalJobly;
